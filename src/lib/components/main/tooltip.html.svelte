<script>
  import { lang } from '$lib/stores/lang.js';

  /**
   * @typedef {Object} Props
   * @property {any} [evt] - evt - A svelte event with event information under `evt.e`.
   * @property {any} [offset] - [offset=-35] - A y-offset from the hover point, in pixels.
   * @property {import('svelte').Snippet<[any]>} [children]
   */

  /** @type {Props} */
  let { evt, offset = -35, children } = $props();

  const translations = {
    name: {
      en: 'Name',
      he: 'שם'
    },
    iso3: {
      en: 'ISO3',
      he: 'ISO3'
    },
    agrees: {
      en: 'Agreements',
      he: 'הסכמות'
    }
  };

  let mouseEvent = $derived(evt && evt.detail && evt.detail.e ? evt.detail.e : null);
  let tooltipData = $derived(evt && evt.detail && evt.detail.props ? evt.detail.props : null);

  let tooltipTop = $derived(mouseEvent ? mouseEvent.layerY + offset : 0);
  let tooltipLeft = $derived(mouseEvent ? mouseEvent.layerX : 0);
</script>

<style>
  .tooltip {
    position: absolute;
    width: 150px;
    border: 1px solid #ccc;
    font-size: 13px;
    background: rgba(255, 255, 255, 0.85);
    transform: translate(-50%, -100%);
    padding: 5px;
    z-index: 15;
  }
</style>

{#if evt && mouseEvent && tooltipData}
  <div
    class="tooltip"
    style="
      top:{tooltipTop}px;
      left:{tooltipLeft}px;
    "
  >
    {@render children?.({ detail: tooltipData, translations })}
  </div>
{/if}
