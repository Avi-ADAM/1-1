import { LANGUAGES } from '$lib/config/locales.js';
import { INDEXABLE_ROUTES, absoluteUrl, localizedUrl } from '$lib/config/seo.js';

/**
 * One <url> entry per page × language, each listing every language variant as
 * an <xhtml:link> alternate so Google can group them instead of treating them
 * as duplicate content.
 *
 * The namespaces below must stay exactly as they are: Search Console rejects a
 * sitemap whose urlset namespace is not the literal
 * `http://www.sitemaps.org/schemas/sitemap/0.9`.
 */
function entry(route, lang) {
  const alternateLinks = [
    ...LANGUAGES.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${localizedUrl(
          route.path,
          l.code
        )}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(
      route.path
    )}" />`
  ].join('\n');

  return `  <url>
    <loc>${localizedUrl(route.path, lang.code)}</loc>
${alternateLinks}
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
}

export const prerender = false;

export async function GET() {
  const urls = INDEXABLE_ROUTES.flatMap((route) =>
    LANGUAGES.map((lang) => entry(route, lang))
  ).join('\n');

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
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
