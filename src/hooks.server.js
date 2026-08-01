import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  detectLocale,
  isSupportedLocale,
  localeMeta
} from '$lib/config/locales.js';

const manifestLink = {
  he: "https://res.cloudinary.com/love1/raw/upload/v1749551626/manifest_with_new_routes_qktyc3.json?v=3",
  en: "https://res.cloudinary.com/love1/raw/upload/v1749552534/eng-mani-updated_xpcxdf.json?v=2",
  ar: "https://res.cloudinary.com/love1/raw/upload/v1749552534/eng-mani-updated_xpcxdf.json?v=2"
};

// Language landing paths (/en, /he, /ja, …): set the cookie and bounce to the
// canonical language URL ("/?lang=xx"), which is the address the sitemap and
// the hreflang alternates advertise.
const LANG_PATHS = SUPPORTED_LOCALES.map((code) => `/${code}`);

/** Fall back to English metadata for languages without dedicated copy. */
function pick(map, code) {
  return map[code] ?? map.en;
}

let lang = DEFAULT_LOCALE; // Default language set to Hebrew

// Helper function to get language from URL or cookies
function getLanguage(event) {
  const qlang = event.url.searchParams.get('lang');
  const coociLang = event.cookies.get('lang');
  const userAgent = event.request.headers.get('accept-language');
  const pathLang = event.url.pathname.slice(1);

  if (isSupportedLocale(qlang)) {
    return qlang;
  } else if (isSupportedLocale(pathLang)) {
    return pathLang;
  } else if (isSupportedLocale(coociLang)) {
    return coociLang;
  } else {
    return detectLocale(userAgent, 'en');
  }
}
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  lang = getLanguage(event);

  event.locals.lang = lang;
  event.locals.userAgent = event.request.headers.get('accept-language');
  event.locals.isDesktop = event.request.headers.get('sec-ch-ua-mobile') === '?0';
  event.locals.tok = event.cookies.get('jwt') || false;
  event.locals.uid = event.cookies.get('id') || false;
  event.locals.un = event.cookies.get('un') || false;
  event.locals.email = event.cookies.get('email') || false;
  console.log(lang,event.url.pathname)
  // Set language cookie based on URL path
  if (LANG_PATHS.includes(event.url.pathname)) {
    event.cookies.set('lang', lang, { path: '/' });
    return new Response(null, {
      status: 301,
      headers: {
        Location: lang === DEFAULT_LOCALE ? '/' : `/?lang=${lang}`
      }
    });
  }

  // Redirect logic based on authentication
 if (event.url.pathname.startsWith('/api')) {
    return await resolve(event);
  }

  return await resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replace('%lang%', lang)
        .replace('%cl%', localeMeta(lang).htmlLang)
        .replace('%manifest%', pick(manifestLink, lang))
  });
}

// Uncomment if using Sentry
// export const handle = sequence(Sentry.sentryHandle(), handle);
