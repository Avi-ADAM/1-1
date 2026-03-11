<script>
	import "../app.postcss";

import { lang, doesLang, langUs } from '$lib/stores/lang.js'
import { onMount } from 'svelte';
import { loadTranslations, locale } from '$lib/translations';

let { data, children } = $props();

async function getLang() {
    let la;
    const fromSe = data.userAgent || "";
    if ($doesLang == false) {
        if (fromSe.includes("he")) {
            la = "he";
        } else if (fromSe.includes("ar")) {
            la = "ar";
        } else if (fromSe.includes("fr")) {
            la = "fr";
        } else if (fromSe.includes("ru")) {
            la = "ru";
        } else if (fromSe.includes("es")) {
            la = "es";
        } else {
            la = "en";
        }
    } else {
        la = $langUs;
    }
    
    lang.set(la);
    locale.set(la);
    await loadTranslations(la);
    document.cookie = `lang=${la}; expires=` + new Date(2029, 0, 1).toUTCString();
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


