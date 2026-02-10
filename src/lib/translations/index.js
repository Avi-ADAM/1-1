import i18n from 'sveltekit-i18n';
import lang from './lang.json';

export const config = {
    translations: {
        en: { lang },
        he: { lang },
        ar: { lang },
    },
    loaders: [
        {
            locale: 'en',
            key: 'love',
            routes: ['/love'], 
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
            routes: ['/love'], 
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
            routes: ['/love'], 
            loader: async () => (await import('./ar/love.json')).default,
        },
        {
            locale: 'ar',
            key: 'countries',
            loader: async () => (await import('./ar/countries.json')).default,
        },
    ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
