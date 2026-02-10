import { locale, loadTranslations } from '$lib/translations';


export const load = async ({ url, data }) => {
  const { pathname } = url;
  const { lang } = data;
  console.log(lang,pathname);
  locale.set(lang);
  await loadTranslations(lang, pathname);

  return data;
};
