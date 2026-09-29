export function assetUrl(path: string): string {
  // remove a barra inicial do path, se tiver, pra evitar barra dupla
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}