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

const desc = {
  he: 'הסכמה עולמית על חירות.',
  en: 'WorldWide consensus for Security and Peace.',
  ar: 'نظام إدارة الشراكات القائم على التوافق، يمكننا معًا',
  fa: 'پیمان جهانی برای آزادی و امنیت.',
  es: 'Consenso mundial por la libertad y la seguridad.',
  fr: 'Consensus mondial pour la liberté et la sécurité.',
  de: 'Weltweiter Konsens für Freiheit und Sicherheit.',
  hu: 'Világméretű megállapodás a szabadságról és a biztonságról.',
  ru: 'Всемирный консенсус за свободу и безопасность.',
  zh: '关于自由与安全的全球共识。',
  ja: '自由と安全に関する世界的合意。'
};

const title = {
  en: 'Worldwide Consensus for Freedom',
  he: 'הסכמה עולמית על חירות וביטחון',
  ar: '1💗1 | نخلق معًا بتناغم | اتفاق عالمي للحرية',
  fa: '1💗1 | پیمان جهانی برای آزادی',
  es: '1💗1 | Consenso Mundial por la Libertad',
  fr: '1💗1 | Consensus Mondial pour la Liberté',
  de: '1💗1 | Weltweiter Konsens für Freiheit',
  hu: '1💗1 | Világméretű egyetértés a szabadságról',
  ru: '1💗1 | Всемирный консенсус за свободу',
  zh: '1💗1 | 关于自由的全球共识',
  ja: '1💗1 | 自由に関する世界的合意'
};

// Language landing paths (/en, /he, /ja, …): set the cookie and bounce to "/"
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

  return await resolve(event, {
    transformPageChunk: ({ html }) =>
      html
        .replace('%lang%', lang)
        .replace('%xtitle%', pick(title, lang))
        .replace('%title%', pick(title, lang))
        .replace('%desc%', pick(desc, lang))
        .replace('%xdes%', pick(desc, lang))
        .replace('%desci%', pick(desc, lang))
        .replace('%cl%', localeMeta(lang).htmlLang)
        .replace('%manifest%', pick(manifestLink, lang))
  });
}

// Uncomment if using Sentry
// export const handle = sequence(Sentry.sentryHandle(), handle);
