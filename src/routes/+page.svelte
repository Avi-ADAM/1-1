<script>
  import { t, locale } from '$lib/translations';
  import { setLanguage } from '$lib/stores/lang.js';
  import { derived } from 'svelte/store';
  import {
    LANGUAGES,
    RTL_LOCALES,
    DEFAULT_LOCALE
  } from '$lib/config/locales.js';
  // All content keyed by locale — shared with the other route that renders it.
  import { ABOUT_CONTENT as CONTENT } from '$lib/content/about.js';

  // ── Infographic images (place in /static/infographics/) ──────────────────
  //const INFOGRAPHIC_1 = '/he/infographic-consensus.png'; // unnamed.png  → rename
  //const INFOGRAPHIC_2 = '/he/infographic-agreement.png'; // unnamed__1___2_.png → rename

  // ── Reactive state ────────────────────────────────────────────────────────
  // The language comes from the i18n locale store, which the root layout sets
  // from the cookie / ?lang= / Accept-Language on the server. Deriving it
  // (rather than starting at 'he' and correcting after hydration) means the
  // server already renders this page in the visitor's own language.
  let currentLang = $derived(CONTENT[$locale] ? $locale : DEFAULT_LOCALE);
  let activeTab = $state(0);

  // ── Background image rotation ─────────────────────────────────────────────
  const BG_IMAGES = [3, 6];
  let bgIndex = $state(0);

  $effect(() => {
    const interval = setInterval(() => {
      bgIndex = (bgIndex + 1) % BG_IMAGES.length;
    }, 15000);
    return () => clearInterval(interval);
  });

  // A different language means a different set of tabs — start from the first.
  $effect(() => {
    currentLang;
    activeTab = 0;
  });

  let content = $derived(CONTENT[currentLang] || CONTENT[DEFAULT_LOCALE]);
  let isRTL = $derived(RTL_LOCALES.includes(currentLang));

  // The STA"M font is a Hebrew scribal typeface — it says nothing in Persian,
  // Chinese or Cyrillic, so only Hebrew gets it.
  let peaceFont = $derived(
    currentLang === 'he' ? "font-family: 'StamSefarad', serif;" : ''
  );

  // All supported languages for the switcher — see $lib/config/locales.js

  function switchLang(code) {
    // Remember the choice so it survives navigation and a page reload.
    setLanguage(code);
    locale.set(code);
  }
</script>

<!-- ═══════════════════════════════════════════════════════════════════════════
     ABOUT PAGE
════════════════════════════════════════════════════════════════════════════ -->
<div
  class="about-root min-h-screen bg-black text-white overflow-x-hidden relative"
  dir={content.dir}
  lang={currentLang}
>
  <!-- Light dimming overlay -->
  <div class="fixed inset-0 pointer-events-none bg-black/20 z-[60]"></div>

  <!-- ── Hero banner ──────────────────────────────────────────────────────── -->

  <div class="relative w-full overflow-hidden" style="aspect-ratio: 9/2;">
    {#each BG_IMAGES as bg, i}
      <div
        class="absolute inset-0 w-full h-full transition-all duration-[3000ms] ease-in-out {bgIndex ===
        i
          ? 'opacity-100 scale-105'
          : 'opacity-0 scale-100'}"
      >
        <picture>
          <source srcset="/bg/{bg}.png" type="image/webp" />
          <img
            src="/bg/{bg}.png"
            alt={content.heroSubtitle}
            class="w-full h-full object-cover"
          />
        </picture>
      </div>
    {/each}

    <div
      class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 z-10"
    ></div>

    <!-- Language switcher — always top-right visually -->
    <div class="absolute top-3 end-3 z-20">
      <div class="flex flex-wrap gap-1 justify-end">
        {#each LANGUAGES as lng}
          <button
            onclick={() => switchLang(lng.code)}
            class="px-2 py-1 rounded text-xs font-semibold transition-all duration-200
              {currentLang === lng.code
              ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/40'
              : 'bg-white/10 hover:bg-white/20 text-white/80 backdrop-blur-sm'}"
            title={lng.label}
          >
            {lng.flag}
            {lng.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Hero text overlay -->
    <div class="absolute bottom-4 start-0 end-0 px-6 text-center">
      <h1
        class="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl leading-tight"
      >
        <span class="text-pink-400">{content.heroTitle}</span><br />
        {content.heroSubtitle}
      </h1>
    </div>
  </div>

  <!-- ── Hero lead text ──────────────────────────────────────────────────── -->
  <div class="max-w-3xl mx-auto px-6 py-8 text-center">
    <p
      class="text-cyan-300 text-base sm:text-lg leading-relaxed whitespace-pre-line font-light"
    >
      {content.heroLead}
    </p>
  </div>

  <!-- ── Vision / Mission / Principle cards ─────────────────────────────── -->
  <div class="max-w-5xl mx-auto px-4 pb-10">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Vision -->
      <div
        class="rounded-2xl bg-gradient-to-br from-pink-900/40 to-purple-900/40 border border-pink-500/20 p-6 backdrop-blur-sm"
      >
        <div class="text-3xl mb-3 text-center">💗</div>
        <h2 class="text-pink-400 font-bold text-lg mb-3 text-center">
          {content.visionTitle}
        </h2>
        <p class="text-white/80 text-sm leading-relaxed text-center">
          {content.visionText}
        </p>
      </div>

      <!-- Mission -->
      <div
        class="rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 p-6 backdrop-blur-sm"
      >
        <div class="text-3xl mb-3 text-center">🌍</div>
        <h2 class="text-cyan-400 font-bold text-lg mb-3 text-center">
          {content.missionTitle}
        </h2>
        <p class="text-white/80 text-sm leading-relaxed text-center">
          {content.missionText}
        </p>
      </div>

      <!-- Principle -->
      <div
        class="rounded-2xl bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-500/20 p-6 backdrop-blur-sm"
      >
        <div class="text-3xl mb-3 text-center">✨</div>
        <h2 class="text-amber-400 font-bold text-lg mb-3 text-center">
          {content.principleTitle}
        </h2>
        <p class="text-white/80 text-sm leading-relaxed text-center">
          {content.principleText}
        </p>
      </div>
    </div>
  </div>

  <!-- ── Infographics ────────────────────────────────────────────────────── -->
  <div class="max-w-6xl mx-auto px-4 pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <!-- Infographic 1 
      {#if lang == 'he'}
        <figure
          class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-pink-900/20 bg-white/5"
        >
          <img
            src={INFOGRAPHIC_1}
            alt={content.infographic1Alt}
            class="w-full h-auto object-contain"
            loading="lazy"
          />
          <figcaption class="text-center text-white/60 text-sm py-3 px-4">
            {content.infographic1Caption}
          </figcaption>
        </figure>

      -->
      <!-- Infographic 2  --><!----
        <figure
          class="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20 bg-white/5"
        >
          <img
            src={INFOGRAPHIC_2}
            alt={content.infographic2Alt}
            class="w-full h-auto object-contain"
            loading="lazy"
          />
          <figcaption class="text-center text-white/60 text-sm py-3 px-4">
            {content.infographic2Caption}
          </figcaption>
        </figure>
      {/if}-->
    </div>
  </div>

  <!-- ── Audience-specific tabs ──────────────────────────────────────────── -->
  {#if content.audienceTabs && content.audienceTabs.length > 1}
    <div class="max-w-3xl mx-auto px-4 pb-10">
      <div class="rounded-2xl border border-white/10 overflow-hidden">
        <!-- Tab buttons -->
        <div class="flex" role="tablist">
          {#each content.audienceTabs as tab, i}
            <button
              role="tab"
              aria-selected={activeTab === i}
              onclick={() => (activeTab = i)}
              class="flex-1 py-3 px-4 text-sm font-semibold transition-all duration-200 border-b-2
              {activeTab === i
                ? 'bg-pink-500/20 border-pink-500 text-pink-300'
                : 'bg-white/5 border-transparent text-white/50 hover:text-white/80 hover:bg-white/10'}"
            >
              {tab.label}
            </button>
          {/each}
        </div>

        <!-- Tab content -->
        <div class="p-6 bg-white/5">
          <h3 class="text-pink-300 font-bold text-lg mb-3">
            {content.audienceTabs[activeTab].title}
          </h3>
          <p class="text-white/80 leading-relaxed">
            {content.audienceTabs[activeTab].text}
          </p>
        </div>
      </div>
    </div>
  {:else if content.audienceTabs && content.audienceTabs.length === 1}
    <div class="max-w-3xl mx-auto px-4 pb-10">
      <div class="rounded-2xl border border-pink-500/20 bg-pink-900/10 p-6">
        <h3 class="text-pink-300 font-bold text-lg mb-3">
          {content.audienceTabs[0].title}
        </h3>
        <p class="text-white/80 leading-relaxed">
          {content.audienceTabs[0].text}
        </p>
      </div>
    </div>
  {/if}

  <!-- ── Peace text, from the reader's own culture ──────────────────────── -->
  <div class="max-w-3xl mx-auto px-6 pb-10">
    <div
      class="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/60 to-blue-950/60 p-6 sm:p-8 text-center"
    >
      <div class="text-2xl mb-4">🕊️</div>
      <h3 class="text-cyan-400 font-bold text-base mb-4" style={peaceFont}>
        {content.peaceTitle}
      </h3>
      <p
        class="text-cyan-200/80 leading-loose whitespace-pre-line text-sm sm:text-base"
        style={peaceFont}
      >
        {content.peaceText}
      </p>
    </div>
  </div>

  <!-- ── 9 Billion Steps Journey (NEW SECTION) ──────────────────────────── -->
  <div class="max-w-4xl mx-auto px-6 pb-12 text-center">
    <div
      class="relative rounded-3xl p-8 sm:p-12 overflow-hidden border border-pink-500/30 bg-black/40 shadow-2xl backdrop-blur-md"
    >
      <!-- decorative glow -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent pointer-events-none"
      ></div>

      <h3
        class="text-2xl sm:text-3xl font-bold text-pink-400 mb-6 drop-shadow-md"
      >
        {content.journeyTitle}
      </h3>
      <p
        class="text-white/90 text-lg sm:text-xl leading-relaxed whitespace-pre-line font-light"
      >
        {content.journeyText}
      </p>
    </div>
  </div>

  <!-- ── CTA ────────────────────────────────────────────────────────────── -->
  <div class="max-w-xl mx-auto px-6 pb-10 text-center">
    <div
      class="rounded-2xl bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 p-8"
    >
      <div class="text-4xl mb-4">1💗1</div>
      <h2 class="text-white font-bold text-2xl mb-2">{content.ctaTitle}</h2>
      <p class="text-white/70 mb-6">{content.ctaText}</p>
      <a
        href="https://agreement.1lev1.com/hascama"
        class="inline-block bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400
               text-white font-bold py-3 px-8 rounded-full transition-all duration-200
               shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105"
      >
        {content.ctaButton}
      </a>
    </div>
  </div>

  <!-- ── Social links ───────────────────────────────────────────────────── -->
  <div class="pb-10 flex flex-wrap justify-center gap-4 px-4">
    <a
      target="_blank"
      href="https://www.facebook.com/worldnonviolent"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      <img
        height="20"
        width="20"
        alt="facebook"
        src="https://res.cloudinary.com/love1/image/upload/v1639258134/NicePng_oro-png_2336309_rkhbf8.png"
      />
      {content.communityLinkText}
    </a>
    <!-- <a
      target="_blank"
      href="https://discord.gg/DNaMwrXzyS"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      <img
        height="20"
        width="40"
        alt="Discord"
        src="https://res.cloudinary.com/love1/image/upload/v1641482980/discord-seeklogo.com_tkftet.svg"
      />
    </a>-->
    <a
      target="_blank"
      href="https://www.1lev1.com/project/15"
      class="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 text-pink-300 text-sm transition-all"
    >
      {content.teamLinkText}
    </a>
  </div>

  <!-- ── Contact footer ─────────────────────────────────────────────────── -->
  <div class="text-center pb-8 px-4">
    <p class="text-white/40 text-sm">
      {content.contactText}
      <a
        href="mailto:baruch@1lev1.com"
        class="text-pink-400 hover:text-pink-300 transition-colors"
      >
        baruch@1lev1.com
      </a>
    </p>
    <p class="text-white/30 text-xs mt-2">
      <a
        target="_blank"
        class="hover:text-pink-300 transition-colors"
        href="https://www.1lev1.com"
      >
        1💗1
      </a>
    </p>
  </div>

  <!-- ── Bottom Decorative Image ────────────────────────────────────────── -->
  <div
    class="w-full relative overflow-hidden mt-12"
    style="aspect-ratio: 1881/836; min-height: 300px;"
  >
    <img
      src="/bg/1.png"
      alt="background decoration"
      class="w-full h-full object-cover"
    />
    <!-- Gradient: Dimmed at top, full brightness at bottom -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-transparent"
    ></div>
  </div>
</div>

<style>
  .about-root {
    font-family:
      'Segoe UI', 'Noto Sans Hebrew', 'Noto Sans Arabic', system-ui, sans-serif;
  }

  /* Logical properties for RTL/LTR layout */
  [dir='rtl'] .start-0 {
    right: 0;
    left: auto;
  }
  [dir='rtl'] .end-3 {
    left: 0.75rem;
    right: auto;
  }
  [dir='ltr'] .start-0 {
    left: 0;
    right: auto;
  }
  [dir='ltr'] .end-3 {
    right: 0.75rem;
    left: auto;
  }

  /* StamSefarad font for the prayer section */
  @font-face {
    font-family: 'StamSefarad';
    src: local('StamSefarad');
    font-display: swap;
  }

  /* Smooth tab transitions */
  [role='tabpanel'],
  .tab-content {
    animation: fadeIn 0.2s ease;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile: full-width infographic images */
  @media (max-width: 640px) {
    figure img {
      max-height: 85vw;
      object-fit: contain;
    }
  }
</style>
