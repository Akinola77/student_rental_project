export const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://cloudhight.com";

export function absoluteUrl(path: string) {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalised}`;
}
