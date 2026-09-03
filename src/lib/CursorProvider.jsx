/**
 * Reemplazo de `react-cursor-custom` (sin mantenimiento desde 2022).
 *
 * Mismo comportamiento y misma API:
 *   <CursorProvider color={...} ringSize={25} transitionTime={75}> … </CursorProvider>
 *
 * Un punto que sigue al ratón al instante y un anillo que lo persigue con
 * retardo. Se desactiva solo en dispositivos táctiles y respeta la
 * preferencia del sistema de reducir movimiento.
 */
import React, { useEffect, useRef, useState } from "react";

export function CursorProvider({
  children,
  color = "#fff",
  ringSize = 25,
  transitionTime = 75,
}) {
  const anillo = useRef(null);
  const punto = useRef(null);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    const finoYSinPreferencia =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finoYSinPreferencia) return;

    setActivo(true);
    document.body.classList.add("cursor-personalizado-activo");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ax = x;
    let ay = y;
    let raf;

    const mover = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (punto.current) {
        punto.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    // el anillo interpola hacia el puntero: de ahí la sensación de arrastre
    const factor = Math.min(1, 16 / Math.max(transitionTime, 1));
    const animar = () => {
      ax += (x - ax) * factor;
      ay += (y - ay) * factor;
      if (anillo.current) {
        anillo.current.style.transform = `translate3d(${ax}px, ${ay}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animar);
    };

    const sobreClicable = (e) => {
      const clicable = e.target.closest(
        "a, button, [role='button'], input, textarea, select",
      );
      if (anillo.current) {
        anillo.current.style.width = `${clicable ? ringSize * 1.6 : ringSize}px`;
        anillo.current.style.height = `${clicable ? ringSize * 1.6 : ringSize}px`;
        anillo.current.style.opacity = clicable ? "0.6" : "1";
      }
    };

    window.addEventListener("mousemove", mover, { passive: true });
    window.addEventListener("mouseover", sobreClicable, { passive: true });
    raf = requestAnimationFrame(animar);

    return () => {
      window.removeEventListener("mousemove", mover);
      window.removeEventListener("mouseover", sobreClicable);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-personalizado-activo");
    };
  }, [ringSize, transitionTime]);

  const comun = {
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 2147483647,
    borderRadius: "50%",
  };

  return (
    <>
      {activo && (
        <>
          <div
            ref={anillo}
            aria-hidden="true"
            style={{
              ...comun,
              width: ringSize,
              height: ringSize,
              border: `1.5px solid ${color}`,
              transition:
                "width .18s ease, height .18s ease, opacity .18s ease",
            }}
          />
          <div
            ref={punto}
            aria-hidden="true"
            style={{ ...comun, width: 6, height: 6, backgroundColor: color }}
          />
        </>
      )}
      {children}
    </>
  );
}

export default CursorProvider;
