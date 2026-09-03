/**
 * Resolución de imágenes por nombre.
 *
 * El código original usaba `require(\`../../assests/images/${nombre}\`)`, que
 * es de webpack/CRA y no existe en Vite. Aquí se indexan todas las imágenes en
 * tiempo de compilación y se resuelven por nombre de archivo.
 */
const modulos = import.meta.glob(
  "../assests/images/*.{png,jpg,jpeg,gif,svg,webp}",
  { eager: true, query: "?url", import: "default" },
);

// se indexa en minúsculas: el sistema de archivos de macOS no distingue
// mayúsculas, pero el servidor de GitHub Pages (Linux) sí
const porNombre = Object.fromEntries(
  Object.entries(modulos).map(([ruta, url]) => [
    ruta.split("/").pop().toLowerCase(),
    url,
  ]),
);

export function imagen(nombre) {
  if (!nombre) return "";
  const url = porNombre[nombre.split("/").pop().toLowerCase()];
  if (!url && import.meta.env.DEV) {
    console.warn(`[imagen] no encontrada: ${nombre}`);
  }
  return url || "";
}

export default imagen;
