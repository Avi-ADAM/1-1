/**
 * Everything a crawler or a share card sees, in the visitor's language.
 *
 * This site used to serve metadata copied from the sister site 1lev1.com: a
 * canonical and og:url pointing at that domain, a Hebrew title and description
 * regardless of the language being read, a JSON-LD block describing the
 * partnership platform rather than the agreement, and hreflang for three of the
 * languages. All of it is built here now, from the translations the pages
 * already use, so a new language needs nothing added to this file.
 *
 * `hooks.server.js` renders this into `app.html`, which means it is correct in
 * the very first byte of the response — before any JavaScript runs.
 */

import { ABOUT_CONTENT } from '$lib/content/about.js';
import { LANGUAGES, localeMeta } from './locales.js';

/** This site. Not 1lev1.com, which is the sister platform it registers into. */
export const SITE_URL = 'https://agreement.1lev1.com';

/** The sister platform, named as the publisher and linked to as such. */
export const PARENT_SITE_URL = 'https://www.1lev1.com/';

export const CONTACT_EMAIL = 'baruch@1lev1.com';

export const OG_IMAGE =
  'https://res.cloudinary.com/love1/image/upload/v1640020897/cropped-PicsArt_01-28-07.49.25-1_wvt4qz.png';

/**
 * A URL with no `?lang=` is served in this language (see `detectLocale`'s
 * fallback), so it is what x-default and the English alternate both point at.
 */
const BARE_URL_LOCALE = 'en';

/** `love.json` for every locale, keyed by code — no per-language wiring here. */
const COPY = Object.fromEntries(
  Object.entries(
    import.meta.glob('../translations/*/love.json', {
      eager: true,
      import: 'default'
    })
  ).map(([path, json]) => [path.split('/').at(-2), json])
);

/** @param {string} code */
const copy = (code) => COPY[code] ?? COPY[BARE_URL_LOCALE];

/** @param {string} code */
const about = (code) => ABOUT_CONTENT[code] ?? ABOUT_CONTENT[BARE_URL_LOCALE];

/** og:locale wants underscores and an uppercase region: he_IL, not he-IL. */
const ogLocale = (/** @type {string} */ code) =>
  localeMeta(code).htmlLang.replace('-', '_');

/** The card titles carry a trailing emoji, which reads as noise in a SERP. */
const plain = (/** @type {string} */ text) =>
  text.replace(/[\s‏‎]*[\p{Extended_Pictographic}️]+[\s‏‎]*$/u, '').trim();

/**
 * Title and description per route, composed from the copy the page itself
 * shows. Every route needs its own pair: one title repeated across a site is
 * the single most common on-page SEO defect.
 *
 * @type {Record<string, (c: any, a: any) => { title: string, description: string }>}
 */
const PAGES = {
  '/': (c, a) => ({
    title: `${c.site_title} | ${c.site_subtitle}`,
    description: a.metaDescription
  }),
  '/hascama': (c) => ({
    title: `${plain(c.card_agreement_title)} | ${c.site_title}`,
    description: `${c.hascama.headline} ${c.card_agreement_desc}`
  }),
  '/love': (c) => ({
    title: `${plain(c.card_love_title)} | ${c.site_title}`,
    description: c.card_love_desc
  }),
  '/home': (c) => ({
    title: `${c.hero_title} | ${c.site_title}`,
    description: c.hero_subtitle
  })
};

/**
 * `/` and `/about` render the very same component, so `/about` points at `/`
 * instead of competing with it for the same searches.
 *
 * @param {string} pathname
 */
export function canonicalPath(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  return path === '/about' ? '/' : path;
}

/**
 * @param {string} path  a path already through `canonicalPath`
 * @param {string} code
 */
export function localeUrl(path, code) {
  const base = `${SITE_URL}${path === '/' ? '/' : path}`;
  return code === BARE_URL_LOCALE ? base : `${base}?lang=${code}`;
}

/**
 * Every language this page exists in, plus the x-default every hreflang set
 * needs, so a reader is offered their own language rather than Hebrew.
 *
 * @param {string} path a path already through `canonicalPath`
 */
export function alternates(path) {
  return [
    ...LANGUAGES.map(({ code }) => ({
      hreflang: code,
      ogLocale: ogLocale(code),
      href: localeUrl(path, code)
    })),
    { hreflang: 'x-default', href: localeUrl(path, BARE_URL_LOCALE) }
  ];
}

/**
 * @param {string} code    a supported locale
 * @param {string} pathname
 */
export function pageSeo(code, pathname) {
  const path = canonicalPath(pathname);
  const c = copy(code);
  const page = (PAGES[path] ?? PAGES['/'])(c, about(code));

  return {
    ...page,
    /** The site's own name, in the reader's language. */
    siteName: c.site_title,
    ogLocale: ogLocale(code),
    htmlLang: localeMeta(code).htmlLang,
    dir: c.lang.dir,
    canonical: localeUrl(path, code),
    alternates: alternates(path),
    image: OG_IMAGE
  };
}

/** Routes worth offering to a crawler, in the order they matter. */
export const INDEXED_PATHS = ['/', '/hascama', '/love', '/home'];
