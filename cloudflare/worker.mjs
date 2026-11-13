// PROOVD sites: getproovd.com (homepage) and demo.getproovd.com (interactive demo).
// Pages are served live from the gameonc/proovd-prototype GitHub Pages site,
// so pushing to the repo updates both domains within about a minute. No pasting into Cloudflare.
//   homepage -> home/index.html      demo -> index.html
const ORIGIN = "https://gameonc.github.io/proovd-prototype";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname === "www.getproovd.com") {
      url.hostname = "getproovd.com"; url.protocol = "https:";
      return Response.redirect(url.toString(), 308);
    }
    if (!["GET", "HEAD"].includes(request.method)) {
      return new Response("Method not allowed", { status: 405, headers: { Allow: "GET, HEAD" } });
    }
    const demo = url.hostname === "demo.getproovd.com";
    if (url.pathname === "/robots.txt") {
      return new Response(demo ? "User-agent: *\nDisallow: /\n" : "User-agent: *\nAllow: /\n",
        { headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
    if (url.pathname !== "/" && url.pathname !== "/index.html") {
      return new Response("Not found", { status: 404 });
    }
    const upstream = await fetch(ORIGIN + (demo ? "/index.html" : "/home/index.html"), {
      cf: { cacheTtl: 60, cacheEverything: true }
    });
    if (!upstream.ok) {
      return new Response("PROOVD is updating. Please refresh in a minute.", {
        status: 503, headers: { "Content-Type": "text/plain; charset=utf-8", "Retry-After": "60" }
      });
    }
    const headers = {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=60",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };
    if (demo) headers["X-Robots-Tag"] = "noindex, nofollow";
    return new Response(request.method === "HEAD" ? null : upstream.body, { headers });
  }
};
