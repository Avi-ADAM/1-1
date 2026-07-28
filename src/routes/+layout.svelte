<script>
	import "../app.postcss";

import { lang, doesLang, langUs } from '$lib/stores/lang.js'
import { onMount } from 'svelte';
import { loadTranslations, locale } from '$lib/translations';
import { detectLocale, resolveLocale } from '$lib/config/locales.js';

let { data, children } = $props();

async function getLang() {
    // A language picked during this session wins; otherwise use what the
    // server already resolved (?lang / language path / cookie) and only fall
    // back to the browser's Accept-Language when none of those applied.
    const fallback = resolveLocale(data.lang, detectLocale(data.userAgent, 'en'));
    const la = $doesLang ? resolveLocale($langUs, fallback) : fallback;

    lang.set(la);
    locale.set(la);
    await loadTranslations(la);
    document.cookie =
        `lang=${la}; path=/; expires=` + new Date(2029, 0, 1).toUTCString();
}

onMount(async () => {
    await getLang();
});

// Sync locale whenever lang store changes
$effect(() => {
    if ($lang) {
        locale.set($lang);
        loadTranslations($lang);
    }
});
</script>

	{@render children?.()}


