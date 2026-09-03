/**
 * Resolución de imágenes por nombre.
 *
 * El código original usaba `require(\`../../assests/images/${nombre}\`)`, que
 * es de webpack/CRA y no existe en Vite. Aquí se indexan todas las imágenes en
 * tiempo de compilación y se resuelven por nombre de archivo.
 */
const modulos = import.meta.glob(
  "../assests/images/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true, query: "?url", import: "default" }
);

const porNombre = Object.fromEntries(
  Object.entries(modulos).map(([ruta, url]) => [ruta.split("/").pop(), url])
);

export function imagen(nombre) {
  if (!nombre) return "";
  const url = porNombre[nombre.split("/").pop()];
  if (!url && import.meta.env.DEV) {
    console.warn(`[imagen] no encontrada: ${nombre}`);
  }
  return url || "";
}

export default imagen;
