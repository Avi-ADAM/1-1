import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { DEFAULT_LOCALE, resolveLocale } from '$lib/config/locales.js';

export let doesLang = writable(false)
export let langUs = writable("te");

export let lang = writable(DEFAULT_LOCALE);

/**
 * Remember a language the visitor picked: update every store the UI reads and
 * persist it in the cookie the server reads on the next request.
 *
 * @param {string} code one of the codes in $lib/config/locales.js
 */
export function setLanguage(code) {
  const next = resolveLocale(code);

  doesLang.set(true);
  langUs.set(next);
  lang.set(next);

  if (browser) {
    document.cookie =
      `lang=${next}; path=/; expires=` + new Date(2029, 0, 1).toUTCString();
  }

  return next;
}
