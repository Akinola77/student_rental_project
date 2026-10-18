const IPV4 =
  /^(?:\d{1,3}\.){3}\d{1,3}$/;
const IPV6 = /^[0-9a-fA-F:]+$/;

function stripPort(value: string) {
  const trimmed = value.trim().replace(/^\[/, "").replace(/\]$/, "");
  if (trimmed.startsWith("::ffff:")) {
    return trimmed.slice(7);
  }
  const v4port = trimmed.match(/^(\d{1,3}(?:\.\d{1,3}){3}):\d+$/);
  if (v4port) return v4port[1];
  return trimmed.replace(/%\d+$/, "");
}

function isIp(value: string) {
  const ip = stripPort(value);
  if (IPV4.test(ip)) {
    return ip.split(".").every((part) => Number(part) <= 255);
  }
  return ip.includes(":") && IPV6.test(ip) && ip.length <= 45;
}

function lastForwardedIp(header: string) {
  const parts = header
    .split(",")
    .map((part) => stripPort(part))
    .filter(isIp);
  return parts.at(-1) ?? null;
}

/**
 * Amplify Hosting compute sits behind CloudFront. The viewer address is set by
 * CloudFront. X-Forwarded-For is only used as a last hop after the trusted
 * proxy, never the client-supplied leftmost value.
 */
export function resolveClientIp(headers: Headers) {
  const viewer = headers.get("cloudfront-viewer-address");
  if (viewer) {
    const ip = stripPort(viewer.split(",")[0] ?? "");
    if (isIp(ip)) return ip;
  }

  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const trusted = lastForwardedIp(forwarded);
    if (trusted) return trusted;
  }

  return null;
}
