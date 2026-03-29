<script>
  import { RingLoader } from 'svelte-loading-spinners';
  import { lang } from '$lib/stores/lang.js';
  import { t } from '$lib/translations';

  import { LayerCake, Svg, Html } from 'layercake';
  import { feature } from 'topojson-client';
  import { geoMercator } from 'd3-geo';
  import { scaleLinear } from 'd3-scale';
  import { format } from 'd3-format';

  import MapSvg from '../../lib/components/main/map.svg.svelte';
  import Tooltip from '../../lib/components/main/tooltip.html.svelte';

  // This example loads json data as json using @rollup/plugin-json
  import world from '../../lib/components/main/countries110m.json';
  import { onMount } from 'svelte';
  /**
   * @typedef {Object} Props
   * @property {any} [data]
   */

  /** @type {Props} */
  let { data } = $props();

  const colorKey = 'agrees';
  /* --------------------------------------------
   * Create lookups to more easily join our data
   * `dataJoinKey` is the name of the field in the data
   * `mapJoinKey` is the name of the field in the map file
   */
  const dataJoinKey = 'name';
  const mapJoinKey = 'name';
  const dataLookup = new Map();
  let noof = $state(0);
  let isok = $state(false);

  // Stats
  let activeCountriesCount = $state(0);
  let topCountry = $state({ name: '', count: 0 });

  onMount(() => {
    data.streamed.data.then(function (data) {
      isok = true;
      noof = data.total;
      console.log(noof, 'tesr');

      let maxCount = 0;
      let activeCount = 0;
      let topC = { name: '', count: 0 };

      data.forEach((d) => {
        dataLookup.set(d[dataJoinKey], d);

        // Calculate stats
        if (d.agrees > 0) activeCount++;
        if (d.agrees > maxCount) {
          maxCount = d.agrees;
          topC = { name: d.name, count: d.agrees };
        }
      });
      console.log('Stats:', activeCount, topC);
      activeCountriesCount = activeCount;
      topCountry = topC;
    });
  });

  const geojson = feature(world, world.objects.units);
  const projection = geoMercator;

  let evt = $state({ detail: {} });
  let hideTooltip = $state(true);

  // Create a flat array of objects that LayerCake can use to measure
  // extents for the color scale
  const flatData = geojson.features.map((d) => d.properties);

  // Colors: Low (0) -> High (100+)
  const colors = [
    '#EEE8AA',
    'rgb(209, 146, 255)',
    'rgb(244, 114, 182)',
    '#FF0092'
  ];

  const addCommas = format(',');

  function handleFeatureClick({ e, props }) {
    evt = { detail: { e, props } };
    hideTooltip = false;
  }
</script>

{#await data.streamed.data}
  <div class="loading-container">
    <h3 class="text-barbi">{$t('love.loading')}</h3>
    <br />
    <RingLoader size="260" color="#ff00ae" unit="px" duration="2s"></RingLoader>
  </div>
{:then value}
  <div class="page-wrapper">
    <div class="map-section">
      <header class="page-header">
        <h1 class="main-title">{$t('love.site_title')}</h1>
        <h2 class="secondary-title">{$t('love.site_subtitle')}</h2>
        <p class="stats-count">{$t('love.title')}: {noof}</p>
      </header>

      {#if value.length > 0 && isok}
        <div class="wwa">
          <div class="chart-container">
            <LayerCake
              data={geojson}
              z={(d) => dataLookup.get(d[mapJoinKey])?.[colorKey]}
              zScale={scaleLinear()}
              zRange={colors}
              zDomain={[0, 1, 10, 100]}
              {flatData}
            >
              <Svg>
                <MapSvg
                  {projection}
                  onMouseout={() => (hideTooltip = true)}
                  onFeatureMousemove={({ e, props }) => {
                    evt = { detail: { e, props } };
                    hideTooltip = false;
                  }}
                  onFeatureClick={handleFeatureClick}
                />
              </Svg>

              <Html pointerEvents={false}>
                {#if hideTooltip !== true}
                  <Tooltip {evt}>
                    {#snippet children({ detail })}
                      {@const tooltipData = {
                        ...detail,
                        ...dataLookup.get(detail[mapJoinKey])
                      }}
                      <div
                        class="tooltip-content"
                        dir={$lang === 'he' ? 'rtl' : 'ltr'}
                      >
                        <div class="tooltip-header">
                          {$t('countries.' + tooltipData.name, {
                            default: tooltipData.name
                          })}
                        </div>
                        <div class="tooltip-row">
                          <span class="tooltip-label"
                            >{$t('love.tooltip.Agrees')}:</span
                          >
                          <span class="tooltip-value">
                            {addCommas(tooltipData.agrees || 0)}
                          </span>
                        </div>
                      </div>
                    {/snippet}
                  </Tooltip>
                {/if}
              </Html>
            </LayerCake>
          </div>

          <!-- Legend -->
          <div class="legend" role="complementary" aria-label="Map Legend">
            <h3>{$t('love.legend.title')}</h3>
            <div class="legend-item">
              <span class="color-box" style="background-color: #FF0092;"></span>
              <span>{$t('love.legend.high')}</span>
            </div>
            <div class="legend-item">
              <span
                class="color-box"
                style="background-color: rgb(244, 114, 182);"
              ></span>
              <span>{$t('love.legend.medium')}</span>
            </div>
            <div class="legend-item">
              <span
                class="color-box"
                style="background-color: rgb(209, 146, 255);"
              ></span>
              <span>{$t('love.legend.low')}</span>
            </div>
            <div class="legend-item">
              <span class="color-box" style="background-color: #EEE8AA;"></span>
              <span>{$t('love.legend.none')}</span>
            </div>
          </div>
        </div>

        <!-- Mobile Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="arrow">↓</div>
          <small>{$t('love.scroll')}</small>
        </div>
      {/if}
    </div>

    <!-- Stats Section -->
    <div class="stats-section" dir={$lang === 'he' ? 'rtl' : 'ltr'}>
      <div class="stat-card">
        <div class="stat-value">{addCommas(noof)}</div>
        <div class="stat-label">{$t('love.stats.total')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">
          {$t('countries.' + topCountry.name, { default: topCountry.name })}
          <small>({addCommas(topCountry.count)})</small>
        </div>
        <div class="stat-label">{$t('love.stats.top')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">{addCommas(activeCountriesCount)}</div>
        <div class="stat-label">{$t('love.stats.countries')}</div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
      <div class="cta-container">
        <div class="cta-header">
          <h2>{$t('love.cta.header')}</h2>
          <p>{$t('love.cta.sub')}</p>
        </div>

        <div class="cta-buttons">
          <a href="/" class="btn btn-primary">
            <span class="btn-icon">✍️</span>
            <span>{$t('love.cta.btn1')}</span>
          </a>

          <a href="https://www.1lev1.com" class="btn btn-secondary">
            <span class="btn-icon">🚀</span>
            <span>{$t('love.cta.btn2')}</span>
          </a>
        </div>

        <div class="cta-footer">
          <p class="small-text" style="color: rgba(255,255,255,0.7)">
            {$t('love.cta.footer')}
          </p>
        </div>
      </div>
    </div>
  </div>
{/await}

<style>
  /* Page Layout */
  .page-wrapper {
    width: 100%;
    min-height: 100vh;
    background-color: rgb(103, 232, 249);
    display: flex;
    flex-direction: column;
  }

  /* Map Section */
  .map-section {
    width: 100%;
    height: 70vh;
    min-height: 500px;
    background-color: rgb(103, 232, 249);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    .map-section {
      height: 85vh;
      min-height: 600px;
    }
  }

  .chart-container {
    width: 100%;
    height: 100%;
  }

  /* Map sizing constraints */
  .wwa {
    width: 100%;
    height: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  /* Legend Styles */
  .legend {
    position: absolute;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.85);
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    direction: rtl;
    backdrop-filter: blur(8px);
    z-index: 10;
    min-width: 160px;
  }

  .legend h3 {
    margin: 0 0 12px 0;
    font-size: 15px;
    font-weight: bold;
    color: #333;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #444;
  }

  .color-box {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  /* Loading State */
  .loading-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(103, 232, 249);
  }

  /* Page Header */
  .page-header {
    text-align: center;
    padding: 20px 16px 10px;
  }

  .main-title {
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    font-weight: 800;
    margin: 0 0 4px;
    color: #ff0092;
    text-shadow: 0 2px 4px rgba(255, 0, 146, 0.2);
    letter-spacing: -0.01em;
  }

  .secondary-title {
    font-size: clamp(0.9rem, 2.5vw, 1.15rem);
    font-weight: 500;
    margin: 0 0 8px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1.4;
  }

  .stats-count {
    font-size: clamp(0.85rem, 2vw, 1rem);
    font-weight: 600;
    margin: 0;
    color: #667eea;
    background: rgba(255, 255, 255, 0.7);
    padding: 6px 16px;
    border-radius: 999px;
    display: inline-block;
    backdrop-filter: blur(8px);
  }

  /* Stats Section */
  .stats-section {
    width: 100%;
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin-top: -20px; /* Slight overlap or pull depending on layout */
    direction: rtl;
  }

  .stat-card {
    background: white;
    padding: 20px 25px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    text-align: center;
    min-width: 160px;
    flex: 1;
    max-width: 300px;
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-value {
    font-size: 28px;
    font-weight: 800;
    color: #ff0092;
    margin-bottom: 5px;
  }

  .stat-label {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
  }

  .stat-value small {
    font-size: 0.6em;
    color: #888;
    font-weight: normal;
    display: block; /* or inline depending on pref */
  }

  /* CTA Section Styles */
  .cta-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 60px 20px;
    width: 100%;
    margin-top: auto;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
  }

  .cta-container {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    color: white;
    direction: rtl;
  }

  .cta-header h2 {
    font-size: 28px;
    margin-bottom: 10px;
    font-weight: 800;
  }

  .cta-header p {
    font-size: 18px;
    opacity: 0.95;
    margin-bottom: 30px;
    font-weight: 300;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
  }

  .btn-primary {
    background: white;
    color: #667eea;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .btn-primary:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.15);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px) scale(1.02);
    border-color: white;
  }

  .cta-footer .small-text {
    font-size: 14px;
    opacity: 0.8;
  }

  /* Scroll Indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    animation: bounce 2s infinite;
    z-index: 5;
    pointer-events: none;
    font-weight: bold;
  }

  .scroll-indicator .arrow {
    font-size: 24px;
    line-height: 1;
  }

  .scroll-indicator small {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }

  /* Tooltip Row */
  .tooltip-header {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
    border-bottom: 2px solid #ff0092;
    padding-bottom: 4px;
    color: #333;
    text-align: center;
  }
  .tooltip-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding: 3px 0;
  }
  .tooltip-label {
    font-weight: 600;
    color: #555;
  }
  .tooltip-value {
    font-weight: bold;
    color: #000;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    .scroll-indicator {
      display: none;
    }
    .legend {
      bottom: 30px;
      right: 30px;
    }
  }

  @media (max-width: 600px) {
    .stats-section {
      flex-direction: column;
      align-items: center;
    }
    .stat-card {
      width: 100%;
      max-width: 100%;
    }
  }

  /* Utilities */
  .text-barbi {
    color: #ff0092;
  }
  .text-center {
    text-align: center;
  }
</style>
