import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  detectLocale,
  isSupportedLocale
} from '$lib/config/locales.js';
import {
  CONTACT_EMAIL,
  PARENT_SITE_URL,
  SITE_URL,
  pageSeo
} from '$lib/config/seo.js';

const manifestLink = {
  he: "https://res.cloudinary.com/love1/raw/upload/v1749551626/manifest_with_new_routes_qktyc3.json?v=3",
  en: "https://res.cloudinary.com/love1/raw/upload/v1749552534/eng-mani-updated_xpcxdf.json?v=2",
  ar: "https://res.cloudinary.com/love1/raw/upload/v1749552534/eng-mani-updated_xpcxdf.json?v=2"
};

// Language landing paths (/en, /he, /ja, …): set the cookie and bounce to "/"
const LANG_PATHS = SUPPORTED_LOCALES.map((code) => `/${code}`);

/** Fall back to English metadata for languages without dedicated copy. */
function pick(map, code) {
  return map[code] ?? map.en;
}

/** Safe inside a double-quoted HTML attribute and inside element text. */
function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * String.replace treats `$&` and friends in the replacement as references to
 * the match, and translated copy is not guaranteed to be free of them.
 */
function fill(html, token, value) {
  return html.split(token).join(value);
}

/**
 * Canonical, hreflang, Open Graph, Twitter and JSON-LD for this page in this
 * language — see $lib/config/seo.js for where the values come from.
 */
function seoHead(seo, lang) {
  const alternates = seo.alternates
    .map(
      ({ hreflang, href }) =>
        `  <link rel="alternate" hreflang="${esc(hreflang)}" href="${esc(href)}" />`
    )
    .join('\n');

  const ogAlternates = seo.alternates
    .filter((a) => a.ogLocale && a.hreflang !== lang)
    .map((a) => a.ogLocale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.siteName,
    alternateName: '1💗1',
    url: `${SITE_URL}/`,
    inLanguage: seo.htmlLang,
    description: seo.description,
    image: seo.image,
    publisher: {
      '@type': 'Organization',
      name: '1💗1',
      url: PARENT_SITE_URL,
      email: CONTACT_EMAIL,
      logo: seo.image
    }
  };

  return `  <link rel="canonical" href="${esc(seo.canonical)}" />
${alternates}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${esc(seo.siteName)}" />
  <meta property="og:title" content="${esc(seo.title)}" />
  <meta property="og:description" content="${esc(seo.description)}" />
  <meta property="og:url" content="${esc(seo.canonical)}" />
  <meta property="og:image" content="${esc(seo.image)}" />
  <meta property="og:image:alt" content="${esc(seo.siteName)}" />
  <meta property="og:locale" content="${esc(seo.ogLocale)}" />
${ogAlternates
  .map(
    (code) => `  <meta property="og:locale:alternate" content="${esc(code)}" />`
  )
  .join('\n')}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(seo.title)}" />
  <meta name="twitter:description" content="${esc(seo.description)}" />
  <meta name="twitter:image" content="${esc(seo.image)}" />
  <script type="application/ld+json">${JSON.stringify(jsonLd).replace(
    /</g,
    '\\u003c'
  )}</script>`;
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
    //navigate to "/"
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/'
      }
    });
  }

  // Redirect logic based on authentication
 if (event.url.pathname.startsWith('/api')) {
    return await resolve(event);
  }

  const seo = pageSeo(lang, event.url.pathname);

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      let out = fill(html, '%lang%', esc(lang));
      out = fill(out, '%title%', esc(seo.title));
      out = fill(out, '%desc%', esc(seo.description));
      out = fill(out, '%cl%', esc(seo.htmlLang));
      out = fill(out, '%manifest%', esc(pick(manifestLink, lang)));
      out = fill(out, '%seohead%', seoHead(seo, lang));
      return out;
    }
  });
}

// Uncomment if using Sentry
// export const handle = sequence(Sentry.sentryHandle(), handle);
