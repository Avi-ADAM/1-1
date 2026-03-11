<script>
  // === i18n translations ===
  import { t, locale } from '$lib/translations';

  const rtlLangs = ['he', 'ar'];
  let isRTL = $derived(rtlLangs.includes($locale));
  let dir = $derived(isRTL ? 'rtl' : 'ltr');

  const languages = [
    { code: 'he', label: 'עברית', flag: '🇮🇱' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ar', label: 'العربية', flag: '🌍' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ];
</script>

<div class="maze-overlay" {dir}>
  <div class="inner">
    <!-- Language selector -->
    <div class="lang-bar">
      {#each languages as lang}
        <button
          class="lang-btn {$locale === lang.code ? 'active' : ''}"
          onclick={() => ($locale = lang.code)}
        >
          {lang.flag}
          {lang.label}
        </button>
      {/each}
    </div>

    <!-- Title -->
    <h2 class="maze-title">{$t('love.maze.title')}</h2>

    <!-- Intro strip -->
    <div class="intro-strip">
      {$t('love.maze.site_intro')}
      <span class="highlight">{$t('love.maze.agreement_name')}</span>
      — {$t('love.maze.is_fabric')}
      <span class="site-name">1💗1</span>.
      <br />
      {$t('love.maze.prerequisite')} <span class="site-name">1💗1</span>.
      <br />
      {$t('love.maze.after_agreement')} <span class="site-name">1💗1</span>.
    </div>

    <!-- Details label -->
    <div class="section-label">{$t('love.maze.details_title')}</div>

    <!-- Two cards -->
    <div class="cards">
      <div class="card">
        <div class="card-icon">💗</div>
        <div class="card-title">{$t('love.maze.about_1lev1_title')}</div>
        <div class="card-body">{$t('love.maze.about_1lev1_body')}</div>
      </div>
      <div class="card">
        <div class="card-icon">🌍</div>
        <div class="card-title">{$t('love.maze.about_fabric_title')}</div>
        <div class="card-body">{$t('love.maze.about_fabric_body')}</div>
      </div>
    </div>

    <!-- How it works steps -->
    <div class="section-label">{$t('love.maze.how_works')}</div>
    <div class="steps">
      {#each [1, 2, 3] as n}
        <div class="step">
          <div class="step-num">{n}</div>
          <span>{$t(`love.maze.step${n}`)}</span>
        </div>
      {/each}
    </div>

    <!-- CTA -->
    <a class="cta-link" href="https://1lev1.com" target="_blank" rel="noopener">
      🔑 {$t('love.maze.visit_1lev1')} — 1lev1.com
    </a>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Assistant:wght@300;400;600&display=swap');

  :root {
    --gold: #c9a84c;
    --gold-light: #f0d080;
    --barbi: #e05a9b;
    --deep: #0a0a14;
    --panel: rgba(255, 255, 255, 0.04);
    --border: rgba(201, 168, 76, 0.25);
    --radius: 18px;
  }

  .maze-overlay {
    position: relative;
    z-index: 9000;
    background: linear-gradient(135deg, #0d0d1e 0%, #12102a 50%, #0a0a14 100%);
    border: 1px solid var(--border);
    border-radius: 24px;
    padding: 2.5rem 2rem;
    max-width: 780px;
    margin: 0 auto;
    box-shadow:
      0 0 80px rgba(201, 168, 76, 0.08),
      0 40px 80px rgba(0, 0, 0, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.07);
    font-family: 'Assistant', sans-serif;
    color: #e8e0d0;
    overflow: hidden;
  }

  .maze-overlay::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse 60% 40% at 80% 10%,
        rgba(201, 168, 76, 0.07) 0%,
        transparent 70%
      ),
      radial-gradient(
        ellipse 40% 60% at 10% 90%,
        rgba(224, 90, 155, 0.05) 0%,
        transparent 70%
      );
    pointer-events: none;
    z-index: 0;
  }

  .inner {
    position: relative;
    z-index: 1;
  }

  /* Language Bar */
  .lang-bar {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .lang-btn {
    background: var(--panel);
    border: 1px solid var(--border);
    color: #aaa;
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    font-size: 0.78rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Assistant', sans-serif;
    letter-spacing: 0.02em;
  }

  .lang-btn:hover {
    border-color: var(--gold);
    color: var(--gold-light);
  }

  .lang-btn.active {
    background: linear-gradient(
      135deg,
      rgba(201, 168, 76, 0.2),
      rgba(201, 168, 76, 0.08)
    );
    border-color: var(--gold);
    color: var(--gold-light);
    font-weight: 600;
  }

  /* Title */
  .maze-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.3rem, 3vw, 1.9rem);
    font-weight: 900;
    color: var(--gold-light);
    text-align: center;
    margin-bottom: 1rem;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }

  /* Intro strip */
  .intro-strip {
    background: rgba(201, 168, 76, 0.06);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 1rem 1.4rem;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 0.95rem;
    line-height: 1.8;
    color: #ccc;
  }

  .intro-strip .highlight {
    color: var(--barbi);
    font-weight: 700;
  }

  .intro-strip .site-name {
    color: var(--gold);
    font-weight: 700;
  }

  /* Section label */
  .section-label {
    font-family: 'Playfair Display', serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1.2rem;
    text-align: center;
    opacity: 0.8;
  }

  /* Cards */
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 540px) {
    .cards {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.2rem 1.3rem;
    transition:
      border-color 0.25s,
      box-shadow 0.25s;
  }

  .card:hover {
    border-color: rgba(201, 168, 76, 0.5);
    box-shadow: 0 8px 30px rgba(201, 168, 76, 0.06);
  }

  .card-icon {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .card-title {
    color: var(--gold-light);
    font-weight: 700;
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', serif;
  }

  .card-body {
    color: #b0a898;
    font-size: 0.87rem;
    line-height: 1.7;
  }

  /* Steps */
  .steps {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    margin-bottom: 1.8rem;
  }

  .step {
    display: flex;
    align-items: flex-start;
    gap: 0.9rem;
    background: var(--panel);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    font-size: 0.88rem;
    color: #c0b8a8;
  }

  .step-num {
    flex-shrink: 0;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold), #a07830);
    color: #0a0a14;
    font-weight: 900;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* CTA */
  .cta-link {
    display: block;
    text-align: center;
    background: linear-gradient(
      135deg,
      rgba(201, 168, 76, 0.15),
      rgba(201, 168, 76, 0.05)
    );
    border: 1px solid var(--gold);
    border-radius: 12px;
    padding: 0.85rem 1.5rem;
    color: var(--gold-light);
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    transition: all 0.25s;
    letter-spacing: 0.04em;
  }

  .cta-link:hover {
    background: linear-gradient(
      135deg,
      rgba(201, 168, 76, 0.28),
      rgba(201, 168, 76, 0.1)
    );
    box-shadow: 0 0 30px rgba(201, 168, 76, 0.15);
    transform: translateY(-1px);
  }
</style>
