const manifestLink = {
  he: "https://res.cloudinary.com/love1/raw/upload/v1749551626/manifest_with_new_routes_qktyc3.json?v=3",
  en: "https://res.cloudinary.com/love1/raw/upload/v1749552534/eng-mani-updated_xpcxdf.json?v=2",
  ar: "https://res.cloudinary.com/love1/raw/upload/v1749552534/eng-mani-updated_xpcxdf.json?v=2"
};

const desc = {
  he: 'הסכמה עולמית על חירות.',
  en: 'WorldWide consensus for Security and Peace.',
  ar: 'نظام إدارة الشراكات القائم على التوافق، يمكننا معًا'
};

const title = {
  en: 'Worldwide Consensus for Freedom',
  he: 'הסכמה עולמית על חירות וביטחון',
  ar: '1💗1 | نخلق معًا بتناغم | اتفاق عالمي للحرية'
};

const cl = {
  he: 'he-IL',
  en: 'en-gb',
  ar: 'ar-EG'
};

let lang = 'he'; // Default language set to Hebrew

// Helper function to get language from URL or cookies
function getLanguage(event) {
  let qlang = event.url.searchParams.get('lang');
  const coociLang = event.cookies.get('lang');
  const userAgent = event.request.headers.get('accept-language');

  if (qlang && ['he', 'en', 'ar'].includes(qlang)) {
    return qlang;
  } else if (event.url.pathname === '/en') {
    return 'en';
  } else if (event.url.pathname === '/ar') {
    return 'ar';
  } else if (event.url.pathname === '/he') {
    return 'he';
  } else if (!coociLang) {
    return userAgent?.includes('he') ? 'he' : 'en';
  } else {
    return coociLang;
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
  if (event.url.pathname === '/en' || event.url.pathname === '/ar' || event.url.pathname === '/he') {
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
        .replace('%xtitle%', title[lang])
        .replace('%title%', title[lang])
        .replace('%desc%', desc[lang])
        .replace('%xdes%', desc[lang])
        .replace('%desci%', desc[lang])
        .replace('%cl%', cl[lang])
        .replace('%manifest%', manifestLink[lang])
  });
}

// Uncomment if using Sentry
// export const handle = sequence(Sentry.sentryHandle(), handle);
