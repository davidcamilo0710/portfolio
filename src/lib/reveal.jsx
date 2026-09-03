/**
 * Reemplazo de `react-reveal` (abandonada, incompatible con React 18+).
 *
 * Mantiene exactamente la misma API que se usaba en el proyecto:
 *   <Fade bottom duration={2000} distance="40px"> … </Fade>
 *   <Flip left duration={1000}> … </Flip>
 *
 * Por dentro usa framer-motion y se dispara al entrar en pantalla, igual que antes.
 */
import React from "react";
import { motion } from "framer-motion";

const desplazamiento = (props, distance) => {
  const d = parseInt(distance, 10) || 40;
  if (props.bottom) return { y: d };
  if (props.top) return { y: -d };
  if (props.left) return { x: -d };
  if (props.right) return { x: d };
  return {};
};

export function Fade({
  children,
  duration = 1000,
  delay = 0,
  distance = "40px",
  when = true,
  top,
  bottom,
  left,
  right,
  style: estilo,
  ...resto
}) {
  const offset = desplazamiento({ top, bottom, left, right }, distance);
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ willChange: "opacity, transform", ...estilo }}
      {...resto}
    >
      {when ? children : null}
    </motion.div>
  );
}

export function Flip({
  children,
  duration = 1000,
  delay = 0,
  top,
  bottom,
  left,
  right,
  style: estilo,
  ...resto
}) {
  const eje = left || right ? "rotateY" : "rotateX";
  return (
    <motion.div
      initial={{ opacity: 0, [eje]: right || bottom ? -90 : 90 }}
      whileInView={{ opacity: 1, [eje]: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{
        transformPerspective: 1000,
        willChange: "opacity, transform",
        ...estilo,
      }}
      {...resto}
    >
      {children}
    </motion.div>
  );
}

export default { Fade, Flip };
