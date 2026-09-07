import { INDEXED_PATHS, alternates, localeUrl } from '$lib/config/seo.js';

/**
 * One entry per page, each listing every language it exists in.
 *
 * The old sitemap named three pages, left out the agreement itself — the page
 * the whole site exists for — and offered no language alternates at all, so a
 * crawler had no way to learn that any language but the one it happened to be
 * served existed.
 */
export async function GET() {
  const lastmod = new Date().toISOString().slice(0, 10);

  const priority = {
    '/': '1.00',
    '/hascama': '0.95',
    '/love': '0.85',
    '/home': '0.70'
  };

  const changefreq = {
    '/': 'weekly',
    '/hascama': 'weekly',
    '/love': 'daily',
    '/home': 'weekly'
  };

  const urls = INDEXED_PATHS.map((path) => {
    const links = alternates(path)
      .map(
        ({ hreflang, href }) =>
          `      <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}" />`
      )
      .join('\n');

    return `    <url>
      <loc>${localeUrl(path, 'en')}</loc>
${links}
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq[path]}</changefreq>
      <priority>${priority[path]}</priority>
    </url>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
