/**
 * Single source of truth for canonical URLs, hreflang alternates and the
 * sitemap.
 *
 * The site serves every page in every language from the same path — the
 * language is picked with the `?lang=` query parameter (see
 * `src/hooks.server.js`). Search engines therefore need:
 *   • a canonical URL per language variant,
 *   • `hreflang` alternates linking the variants together,
 *   • a sitemap listing every path × language pair.
 *
 * All three are derived from the tables below, so adding a route or a
 * language in `locales.js` is enough to keep them in sync.
 */

import { DEFAULT_LOCALE, LANGUAGES, localeMeta, resolveLocale } from './locales.js';
import website from './website.js';

/** Absolute origin, never with a trailing slash. */
export const SITE_URL = website.siteUrl.replace(/\/+$/, '');

export const OG_IMAGE =
  'https://res.cloudinary.com/love1/image/upload/v1640020897/cropped-PicsArt_01-28-07.49.25-1_wvt4qz.png';

/**
 * Normalise a pathname and make it absolute.
 * @param {string} [pathname]
 */
export function absoluteUrl(pathname = '/') {
  const clean = String(pathname || '/').split('?')[0].split('#')[0];
  const trimmed = clean.replace(/^\/+/, '').replace(/\/+$/, '');
  return trimmed ? `${SITE_URL}/${trimmed}` : `${SITE_URL}/`;
}

/**
 * URL of `pathname` in a given language. The default language lives on the
 * bare URL so that `/` stays the canonical entry point of the site.
 *
 * @param {string} pathname
 * @param {string} code
 */
export function localizedUrl(pathname, code) {
  const lang = resolveLocale(code);
  const url = absoluteUrl(pathname);
  return lang === DEFAULT_LOCALE ? url : `${url}?lang=${lang}`;
}

/**
 * `og:locale` value (`he_IL`, `en_GB`, …) for a language code.
 * @param {string} code
 */
export function ogLocale(code) {
  const [language, region] = localeMeta(code).htmlLang.split('-');
  return region ? `${language}_${region.toUpperCase()}` : language;
}

/**
 * Every hreflang alternate for a path, plus the `x-default` fallback.
 * @param {string} pathname
 */
export function alternates(pathname) {
  return [
    ...LANGUAGES.map((l) => ({ hreflang: l.code, href: localizedUrl(pathname, l.code) })),
    { hreflang: 'x-default', href: absoluteUrl(pathname) }
  ];
}

/**
 * Pages that should be indexed, in the order we want crawlers to see them.
 * `lastmod` is maintained by hand — bump it when a page's content changes.
 *
 * @type {{path: string, priority: string, changefreq: string, lastmod: string}[]}
 */
export const INDEXABLE_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: '2026-08-01' },
  { path: '/home', priority: '0.9', changefreq: 'daily', lastmod: '2026-08-01' },
  { path: '/hascama', priority: '0.9', changefreq: 'weekly', lastmod: '2026-08-01' },
  { path: '/love', priority: '0.8', changefreq: 'daily', lastmod: '2026-08-01' },
  { path: '/about', priority: '0.8', changefreq: 'weekly', lastmod: '2026-08-01' },
  { path: '/about-afps', priority: '0.6', changefreq: 'monthly', lastmod: '2026-08-01' }
];
