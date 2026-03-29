<script>
  import { t, locale, loadTranslations } from '$lib/translations';
  import { lang, doesLang, langUs } from '$lib/stores/lang.js';
  import { onMount } from 'svelte';
  import { fly, fade, scale } from 'svelte/transition';
  import { format } from 'd3-format';
  import { page } from '$app/stores';

  /**
   * @typedef {Object} Props
   * @property {any} [data]
   */

  /** @type {Props} */
  let { data } = $props();

  const addCommas = format(',');

  let visible = $state(false);
  let noof = $state(0);
  let activeCountriesCount = $state(0);
  let topCountry = $state({ name: '', count: 0 });
  let statsLoaded = $state(false);
  let langMenuOpen = $state(false);

  const languages = [
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'عربي', flag: '🇸🇦' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];

  async function switchLang(code) {
    doesLang.set(true);
    langUs.set(code);
    lang.set(code);
    locale.set(code);
    await loadTranslations(code, $page.url.pathname);
    document.cookie = `lang=${code}; expires=` + new Date(2029, 0, 1).toUTCString();
    langMenuOpen = false;
  }

  function handleClickOutside(event) {
    if (langMenuOpen && !event.target.closest('.lang-switcher')) {
      langMenuOpen = false;
    }
  }

  onMount(() => {
    visible = true;

    data.streamed.data.then(function (result) {
      noof = result.total;

      let maxCount = 0;
      let activeCount = 0;
      let topC = { name: '', count: 0 };

      result.forEach((d) => {
        if (d.agrees > 0) activeCount++;
        if (d.agrees > maxCount) {
          maxCount = d.agrees;
          topC = { name: d.name, count: d.agrees };
        }
      });

      activeCountriesCount = activeCount;
      topCountry = topC;
      statsLoaded = true;
    });
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<main dir={$t('love.lang.dir')} class="home-page" onclick={handleClickOutside}>
  <!-- Language Switcher -->
  <div class="lang-switcher">
    <button
      class="lang-btn"
      onclick={() => (langMenuOpen = !langMenuOpen)}
      aria-label="Change language"
    >
      <span class="lang-icon">🌐</span>
      <span class="lang-current">{languages.find(l => l.code === $lang)?.label || 'עברית'}</span>
      <svg class="lang-chevron" class:lang-chevron-open={langMenuOpen} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    {#if langMenuOpen}
      <div class="lang-dropdown" in:fly={{ y: -8, duration: 200 }} out:fade={{ duration: 150 }}>
        {#each languages as l}
          <button
            class="lang-option"
            class:lang-option-active={$lang === l.code}
            onclick={() => switchLang(l.code)}
          >
            <span class="lang-option-flag">{l.flag}</span>
            <span class="lang-option-label">{l.label}</span>
            {#if $lang === l.code}
              <span class="lang-check">✓</span>
            {/if}
          </button>
        {/each}
      </div>
    {/if}
  </div>
  <!-- Animated Background Orbs -->
  <div class="bg-orbs" aria-hidden="true">
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>
    <div class="orb orb-4"></div>
  </div>

  <div class="home-container">
    <!-- Hero Section -->
    {#if visible}
      <header class="hero" in:fly={{ y: 40, duration: 800, delay: 100 }}>
        <div class="hero-badge">
          <span class="badge-icon">🌍</span>
          <span class="badge-text">{$t('love.stats.title')}</span>
          {#if statsLoaded}
            <span class="badge-live-dot"></span>
          {/if}
        </div>

        <!-- Live Stats Section -->
        {#if statsLoaded}
          <div class="stats-strip" in:scale={{ duration: 600, delay: 200 }}>
            <div class="stat-item">
              <span class="stat-number">{addCommas(noof)}</span>
              <span class="stat-label">{$t('love.stats.total')}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">{$t('countries.' + topCountry.name, { default: topCountry.name })}</span>
              <span class="stat-sub">({addCommas(topCountry.count)})</span>
              <span class="stat-label">{$t('love.stats.top')}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">{addCommas(activeCountriesCount)}</span>
              <span class="stat-label">{$t('love.stats.countries')}</span>
            </div>
          </div>
        {:else}
          <div class="stats-loading" in:fade={{ duration: 300 }}>
            <div class="loading-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        {/if}

        <h1 class="hero-title">
          {$t('love.site_title')}
        </h1>
        <h2 class="hero-secondary-title">
          {$t('love.site_subtitle')}
        </h2>
        <p class="hero-subtitle">
          {$t('love.hero_subtitle')}
        </p>
        <div class="hero-divider">
          <div class="divider-line"></div>
          <span class="divider-icon">✦</span>
          <div class="divider-line"></div>
        </div>
      </header>
    {/if}

    <!-- Cards Section -->
    {#if visible}
      <div class="cards-grid">
        <!-- Agreement Card -->
        <a
          href="/"
          class="card card-agreement"
          in:fly={{ y: 60, duration: 700, delay: 300 }}
        >
          <div class="card-glow card-glow-blue"></div>
          <div class="card-icon-wrap">
            <span class="card-icon">📜</span>
          </div>
          <div class="card-content">
            <h2 class="card-title">{$t('love.card_agreement_title')}</h2>
            <p class="card-desc">{$t('love.card_agreement_desc')}</p>
          </div>
          <div class="card-action card-action-blue">
            <span>{$t('love.btn_agreement')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        <!-- Love Card -->
        <a
          href="/love"
          class="card card-love"
          in:fly={{ y: 60, duration: 700, delay: 500 }}
        >
          <div class="card-glow card-glow-rose"></div>
          <div class="card-icon-wrap">
            <span class="card-icon card-icon-pulse">❤️</span>
          </div>
          <div class="card-content">
            <h2 class="card-title">{$t('love.card_love_title')}</h2>
            <p class="card-desc">{$t('love.card_love_desc')}</p>
          </div>
          <div class="card-action card-action-rose">
            <span>{$t('love.btn_love')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        <!-- About Card -->
        <a
          href="/about"
          class="card card-about"
          in:fly={{ y: 60, duration: 700, delay: 700 }}
        >
          <div class="card-glow card-glow-emerald"></div>
          <div class="card-icon-wrap">
            <span class="card-icon">🌍</span>
          </div>
          <div class="card-content">
            <h2 class="card-title">{$t('love.card_about_title')}</h2>
            <p class="card-desc">{$t('love.card_about_desc')}</p>
          </div>
          <div class="card-action card-action-emerald">
            <span>{$t('love.btn_about')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </div>
    {/if}

    <!-- Bottom CTA -->
    {#if visible}
      <section class="bottom-cta" in:fade={{ duration: 800, delay: 1000 }}>
        <p class="cta-text">{$t('love.cta.sub')}</p>
        <a href="/" class="cta-button">
          <span class="cta-button-bg"></span>
          <span class="cta-button-text">{$t('love.cta.btn1')}</span>
        </a>
      </section>
    {/if}
  </div>
</main>

<style>
  /* ========== Language Switcher ========== */
  .lang-switcher {
    position: fixed;
    top: 1.25rem;
    right: 1.25rem;
    z-index: 100;
  }

  [dir='rtl'] .lang-switcher {
    right: auto;
    left: 1.25rem;
  }

  .lang-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .lang-btn:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.22);
    color: #fff;
  }

  .lang-icon {
    font-size: 1.1rem;
  }

  .lang-chevron {
    transition: transform 0.2s ease;
    opacity: 0.6;
  }

  .lang-chevron-open {
    transform: rotate(180deg);
  }

  .lang-dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 160px;
    background: rgba(30, 27, 60, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 0.4rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }

  [dir='rtl'] .lang-dropdown {
    right: auto;
    left: 0;
  }

  .lang-option {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 0.6rem 0.85rem;
    background: transparent;
    border: none;
    border-radius: 0.65rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    text-align: start;
  }

  .lang-option:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .lang-option-active {
    background: rgba(99, 102, 241, 0.15);
    color: #a5b4fc;
  }

  .lang-option-active:hover {
    background: rgba(99, 102, 241, 0.25);
  }

  .lang-option-flag {
    font-size: 1.15rem;
  }

  .lang-option-label {
    flex: 1;
  }

  .lang-check {
    font-size: 0.85rem;
    color: #818cf8;
    font-weight: 700;
  }

  /* ========== Base Layout ========== */
  .home-page {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(
      135deg,
      #0f0c29 0%,
      #1a1a3e 30%,
      #24243e 60%,
      #0f0c29 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    overflow: hidden;
    font-family: 'Bellefair', 'Gan', sans-serif;
  }

  .home-container {
    max-width: 72rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    position: relative;
    z-index: 2;
  }

  /* ========== Background Orbs ========== */
  .bg-orbs {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.35;
    animation: orbFloat 18s ease-in-out infinite;
  }

  .orb-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, #6366f1, transparent 70%);
    top: -10%;
    right: -5%;
    animation-delay: 0s;
  }

  .orb-2 {
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, #ec4899, transparent 70%);
    bottom: -5%;
    left: -8%;
    animation-delay: -5s;
  }

  .orb-3 {
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, #10b981, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -10s;
  }

  .orb-4 {
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #f59e0b, transparent 70%);
    top: 20%;
    left: 10%;
    animation-delay: -14s;
  }

  @keyframes orbFloat {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    25% {
      transform: translate(30px, -40px) scale(1.1);
    }
    50% {
      transform: translate(-20px, 30px) scale(0.95);
    }
    75% {
      transform: translate(40px, 20px) scale(1.05);
    }
  }

  /* ========== Hero ========== */
  .hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 0.5rem 1.25rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.75);
    letter-spacing: 0.02em;
  }

  .badge-icon {
    font-size: 1.1rem;
  }

  .badge-live-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
    animation: livePulse 2s ease-in-out infinite;
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 8px #22c55e; }
    50% { opacity: 0.5; box-shadow: 0 0 16px #22c55e; }
  }

  /* ========== Stats Strip ========== */
  .stats-strip {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1.25rem;
    padding: 1.25rem 2rem;
    margin: 0.5rem 0;
    width: 100%;
    max-width: 640px;
    justify-content: center;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    flex: 1;
    min-width: 0;
  }

  .stat-number {
    font-size: 1.75rem;
    font-weight: 800;
    background: linear-gradient(135deg, #f9a8d4, #c084fc, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    white-space: nowrap;
  }

  .stat-sub {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 500;
  }

  .stat-label {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-weight: 600;
  }

  .stat-divider {
    width: 1px;
    height: 40px;
    background: linear-gradient(
      180deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }

  /* Stats Loading */
  .stats-loading {
    padding: 1.25rem 2rem;
  }

  .loading-dots {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .loading-dots span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    animation: dotBounce 1.4s ease-in-out infinite;
  }

  .loading-dots span:nth-child(2) {
    animation-delay: 0.2s;
  }

  .loading-dots span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes dotBounce {
    0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
    40% { transform: scale(1); opacity: 1; }
  }

  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(
      135deg,
      #ffffff 0%,
      #c7d2fe 40%,
      #fecdd3 70%,
      #ffffff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    max-width: 700px;
    letter-spacing: -0.02em;
    margin-bottom: 0.25rem;
  }

  .hero-secondary-title {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    max-width: 600px;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
  }

  .hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.35rem);
    color: rgba(255, 255, 255, 0.55);
    max-width: 600px;
    line-height: 1.7;
  }

  .hero-divider {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
    width: 100%;
    max-width: 280px;
  }

  .divider-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
  }

  .divider-icon {
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.75rem;
  }

  /* ========== Cards ========== */
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 2.25rem 1.75rem 1.75rem;
    border-radius: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: white;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    overflow: hidden;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.08);
  }

  .card-glow {
    position: absolute;
    top: -60%;
    left: 50%;
    transform: translateX(-50%);
    width: 200%;
    height: 200%;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  .card:hover .card-glow {
    opacity: 0.15;
  }

  .card-glow-blue {
    background: #6366f1;
  }

  .card-glow-rose {
    background: #f43f5e;
  }

  .card-glow-emerald {
    background: #10b981;
  }

  /* Card Icon */
  .card-icon-wrap {
    width: 72px;
    height: 72px;
    border-radius: 1.25rem;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
    transition: all 0.4s ease;
  }

  .card:hover .card-icon-wrap {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
  }

  .card-icon {
    font-size: 2rem;
  }

  .card-icon-pulse {
    animation: heartPulse 2s ease-in-out infinite;
  }

  @keyframes heartPulse {
    0%,
    100% {
      transform: scale(1);
    }
    15% {
      transform: scale(1.15);
    }
    30% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.1);
    }
    60% {
      transform: scale(1);
    }
  }

  /* Card Content */
  .card-content {
    flex: 1;
    margin-bottom: 1.5rem;
  }

  .card-title {
    font-size: 1.35rem;
    font-weight: 700;
    margin-bottom: 0.65rem;
    color: rgba(255, 255, 255, 0.95);
    font-family: 'Sababa', 'Gan', 'Powerr', sans-serif;
  }

  .card-desc {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.45);
    line-height: 1.65;
  }

  /* Card Action */
  .card-action {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
    border-radius: 999px;
    transition: all 0.3s ease;
  }

  .card-action svg {
    transition: transform 0.3s ease;
  }

  [dir='rtl'] .card-action svg {
    transform: rotate(180deg);
  }

  .card:hover .card-action svg {
    transform: translateX(4px);
  }

  [dir='rtl'] .card:hover .card-action svg {
    transform: rotate(180deg) translateX(4px);
  }

  .card-action-blue {
    color: #818cf8;
    background: rgba(99, 102, 241, 0.1);
    border: 1px solid rgba(99, 102, 241, 0.15);
  }

  .card:hover .card-action-blue {
    background: rgba(99, 102, 241, 0.2);
    border-color: rgba(99, 102, 241, 0.3);
  }

  .card-action-rose {
    color: #fb7185;
    background: rgba(244, 63, 94, 0.1);
    border: 1px solid rgba(244, 63, 94, 0.15);
  }

  .card:hover .card-action-rose {
    background: rgba(244, 63, 94, 0.2);
    border-color: rgba(244, 63, 94, 0.3);
  }

  .card-action-emerald {
    color: #34d399;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.15);
  }

  .card:hover .card-action-emerald {
    background: rgba(16, 185, 129, 0.2);
    border-color: rgba(16, 185, 129, 0.3);
  }

  /* ========== Bottom CTA ========== */
  .bottom-cta {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    text-align: center;
    padding-top: 1rem;
  }

  .cta-text {
    color: rgba(255, 255, 255, 0.45);
    font-size: 1.05rem;
  }

  .cta-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.85rem 2.5rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 1.05rem;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(99, 102, 241, 0.35);
  }

  .cta-button-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #6366f1, #ec4899, #f59e0b);
    background-size: 200% 200%;
    animation: gradientShift 4s ease infinite;
    border-radius: 999px;
    z-index: 0;
  }

  .cta-button-text {
    position: relative;
    z-index: 1;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* ========== Responsive ========== */
  @media (max-width: 768px) {
    .home-page {
      padding: 2rem 1rem;
    }

    .stats-strip {
      flex-direction: column;
      gap: 0.75rem;
      padding: 1rem 1.25rem;
    }

    .stat-divider {
      width: 80%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.15),
        transparent
      );
    }

    .stat-number {
      font-size: 1.35rem;
    }

    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }

    .card {
      flex-direction: row;
      text-align: start;
      padding: 1.5rem;
      gap: 1rem;
    }

    .card-icon-wrap {
      width: 56px;
      height: 56px;
      min-width: 56px;
      border-radius: 1rem;
      margin-bottom: 0;
    }

    .card-icon {
      font-size: 1.5rem;
    }

    .card-content {
      margin-bottom: 0;
      flex: 1;
    }

    .card-title {
      font-size: 1.15rem;
      margin-bottom: 0.3rem;
    }

    .card-desc {
      font-size: 0.85rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-action {
      display: none;
    }

    .hero-title {
      font-size: clamp(1.75rem, 7vw, 2.5rem);
    }

    .orb-1 {
      width: 250px;
      height: 250px;
    }
    .orb-2 {
      width: 200px;
      height: 200px;
    }
    .orb-3 {
      width: 150px;
      height: 150px;
    }
    .orb-4 {
      width: 120px;
      height: 120px;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .cards-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    .card {
      padding: 1.75rem 1.25rem 1.5rem;
    }
  }
</style>
