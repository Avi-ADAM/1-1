<script>
  /**
   * Per-page SEO head tags: title, description, canonical, hreflang
   * alternates for every language and the Open Graph / Twitter cards.
   *
   * `app.html` deliberately carries no <title> or <meta name="description">,
   * so every route must render this component exactly once — otherwise the
   * page ships without a title.
   */
  import { page } from '$app/stores';
  import { OG_IMAGE, alternates, localizedUrl, ogLocale } from '$lib/config/seo.js';
  import { DEFAULT_LOCALE, LANGUAGES, resolveLocale } from '$lib/config/locales.js';

  /**
   * @typedef {Object} Props
   * @property {string} title            Full <title>, shown in results
   * @property {string} description      Meta description, ~150 characters
   * @property {string} [path]           Defaults to the current pathname
   * @property {string} [lang]           Defaults to the language of the request
   * @property {string} [image]          Social preview image
   * @property {string} [type]           og:type
   * @property {boolean} [noindex]
   */

  /** @type {Props} */
  let {
    title,
    description,
    path = undefined,
    lang = undefined,
    image = OG_IMAGE,
    type = 'website',
    noindex = false
  } = $props();

  let pathname = $derived(path ?? $page.url.pathname);
  let currentLang = $derived(resolveLocale(lang ?? $page.data?.lang, DEFAULT_LOCALE));
  let canonical = $derived(localizedUrl(pathname, currentLang));
  let hreflangs = $derived(alternates(pathname));
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  {#if noindex}
    <meta name="robots" content="noindex, follow" />
  {/if}

  {#each hreflangs as alt (alt.hreflang)}
    <link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
  {/each}

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:type" content={type} />
  <meta property="og:image" content={image} />
  <meta property="og:locale" content={ogLocale(currentLang)} />
  {#each LANGUAGES.filter((l) => l.code !== currentLang) as l (l.code)}
    <meta property="og:locale:alternate" content={ogLocale(l.code)} />
  {/each}

  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
