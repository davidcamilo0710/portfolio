/**
 * Reemplazo de `glamor` (sin mantenimiento desde 2022).
 *
 * Replica la API que usa el proyecto:
 *   const styles = style({ backgroundColor: x, ":hover": { boxShadow: y } });
 *   <a {...styles} className="general-btn">
 *
 * Igual que glamor, devuelve un atributo `data-*` y registra el CSS
 * correspondiente en una hoja de estilos única, con caché por regla.
 */
const cache = new Map();
let hoja = null;

const obtenerHoja = () => {
  if (hoja) return hoja;
  const el = document.createElement("style");
  el.setAttribute("data-style-runtime", "");
  document.head.appendChild(el);
  hoja = el.sheet;
  return hoja;
};

const hash = (s) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  return (h >>> 0).toString(36);
};

// backgroundColor -> background-color
const guion = (p) =>
  p.startsWith("--") ? p : p.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

const declaraciones = (obj) =>
  Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && typeof v !== "object")
    .map(([k, v]) => `${guion(k)}:${typeof v === "number" && !/^(zIndex|opacity|fontWeight|lineHeight|flex|order)$/.test(k) ? `${v}px` : v}`)
    .join(";");

export function style(reglas) {
  if (!reglas) return {};
  const clave = JSON.stringify(reglas);
  if (cache.has(clave)) return cache.get(clave);

  const id = `css-${hash(clave)}`;
  const attr = `[data-${id}]`;
  const resultado = { [`data-${id}`]: "" };

  if (typeof document !== "undefined") {
    const sheet = obtenerHoja();
    const base = declaraciones(reglas);
    if (base) sheet.insertRule(`${attr}{${base}}`, sheet.cssRules.length);

    // pseudo-clases y media queries anidadas: ":hover", "@media …"
    for (const [k, v] of Object.entries(reglas)) {
      if (typeof v !== "object" || v === null) continue;
      const cuerpo = declaraciones(v);
      if (!cuerpo) continue;
      const regla = k.startsWith("@")
        ? `${k}{${attr}{${cuerpo}}}`
        : `${attr}${k}{${cuerpo}}`;
      try {
        sheet.insertRule(regla, sheet.cssRules.length);
      } catch {
        /* una regla no soportada no debe tumbar el render */
      }
    }
  }
  cache.set(clave, resultado);
  return resultado;
}

export default { style };
