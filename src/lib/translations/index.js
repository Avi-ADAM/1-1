import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config = {
    translations: {
        en: { lang },
        he: { lang },
        ar: { lang },
        fr: { lang },
        ru: { lang },
        es: { lang },
        zh: { lang },
        ja: { lang },
        de: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./en/love.json')).default,
        },
        {
            locale: 'en',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
        {
            locale: 'he',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./he/love.json')).default,
        },
        {
            locale: 'he',
            key: 'countries',
            routes: ['/love'], 
            loader: async () => (await import('./he/countries.json')).default,
        },
        {
            locale: 'ar',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./ar/love.json')).default,
        },
        {
            locale: 'ar',
            key: 'countries',
            loader: async () => (await import('./ar/countries.json')).default,
        },
        {
            locale: 'fr',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./fr/love.json')).default,
        },
        {
            locale: 'fr',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
        {
            locale: 'ru',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./ru/love.json')).default,
        },
        {
            locale: 'ru',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
        {
            locale: 'es',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./es/love.json')).default,
        },
        {
            locale: 'es',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
        {
            locale: 'zh',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"], 
            loader: async () => (await import('./zh/love.json')).default,
        },
        {
            locale: 'zh',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
        {
            locale: 'ja',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"],
            loader: async () => (await import('./ja/love.json')).default,
        },
        {
            locale: 'ja',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
        {
            locale: 'de',
            key: 'love',
            routes: ['/love', '/home', '/hascama', '/convention', "/"],
            loader: async () => (await import('./de/love.json')).default,
        },
        {
            locale: 'de',
            key: 'countries',
            loader: async () => (await import('./en/countries.json')).default,
        },
    ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
