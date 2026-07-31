/**
 * Single source of truth for the site languages.
 *
 * Add a language here (plus its `love.json` under `src/lib/translations/<code>/`
 * and its loaders in `src/lib/translations/index.js`) and every language
 * switcher, the `<html lang>` attribute and the accept-language detection pick
 * it up automatically.
 */

/**
 * @typedef {Object} LocaleMeta
 * @property {string} code   BCP-47 primary subtag used as the i18n locale key
 * @property {string} label  Endonym shown in the language switchers
 * @property {string} flag   Emoji shown next to the label
 * @property {'ltr'|'rtl'} dir
 * @property {string} htmlLang  Value for `<html lang>` / og:locale
 */

/** @type {LocaleMeta[]} */
export const LANGUAGES = [
  { code: 'he', label: 'עברית', flag: '🇮🇱', dir: 'rtl', htmlLang: 'he-IL' },
  { code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr', htmlLang: 'en-gb' },
  { code: 'ar', label: 'العربية', flag: '🌍', dir: 'rtl', htmlLang: 'ar-EG' },
  { code: 'es', label: 'Español', flag: '🇪🇸', dir: 'ltr', htmlLang: 'es-ES' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr', htmlLang: 'fr-FR' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', dir: 'ltr', htmlLang: 'de-DE' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺', dir: 'ltr', htmlLang: 'ru-RU' },
  { code: 'zh', label: '中文', flag: '🇨🇳', dir: 'ltr', htmlLang: 'zh-CN' },
  { code: 'ja', label: '日本語', flag: '🇯🇵', dir: 'ltr', htmlLang: 'ja-JP' }
];

export const DEFAULT_LOCALE = 'he';

/** @type {string[]} */
export const SUPPORTED_LOCALES = LANGUAGES.map((l) => l.code);

/** @type {string[]} */
export const RTL_LOCALES = LANGUAGES.filter((l) => l.dir === 'rtl').map(
  (l) => l.code
);

/** @param {string|null|undefined} code */
export function isSupportedLocale(code) {
  return !!code && SUPPORTED_LOCALES.includes(code);
}

/**
 * @param {string|null|undefined} code
 * @param {string} [fallback]
 */
export function resolveLocale(code, fallback = DEFAULT_LOCALE) {
  return isSupportedLocale(code) ? /** @type {string} */ (code) : fallback;
}

/** @param {string|null|undefined} code */
export function localeMeta(code) {
  return (
    LANGUAGES.find((l) => l.code === code) ||
    LANGUAGES.find((l) => l.code === DEFAULT_LOCALE)
  );
}

/** @param {string|null|undefined} code */
export function localeDir(code) {
  return RTL_LOCALES.includes(/** @type {string} */ (code)) ? 'rtl' : 'ltr';
}

/**
 * Pick the best supported locale out of an `Accept-Language` header
 * (or any comma separated list of language tags), honouring q-weights.
 *
 * @param {string|null|undefined} header
 * @param {string} [fallback]
 */
export function detectLocale(header, fallback = 'en') {
  if (!header) return fallback;

  const ranked = String(header)
    .split(',')
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='));
      const quality = q ? parseFloat(q.slice(2)) : 1;
      return {
        tag: tag.trim().toLowerCase(),
        quality: Number.isNaN(quality) ? 0 : quality,
        index
      };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { tag } of ranked) {
    const primary = tag.split('-')[0];
    if (isSupportedLocale(primary)) return primary;
  }

  return fallback;
}
