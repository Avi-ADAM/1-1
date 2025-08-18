<script>
  import { getContext } from 'svelte';
  import { geoPath } from 'd3-geo';
  import { raise } from 'layercake';

  const { data, width, height, zGet } = getContext('LayerCake');

  /**
   * @typedef {Object} Props
   * @property {any} projection - projection - A D3 projection function. Pass this in as an uncalled function, e.g. `projection={geoAlbersUsa}`.
   * @property {any} [fixedAspectRatio] - [fixedAspectRatio] - By default, the map fills to fit the $width and $height. If instead you want a fixed-aspect ratio, like for a server-side rendered map, set that here.
   * @property {any} [fill] - [fill] - The shape's fill color. By default, the fill will be determined by the z-scale, unless this prop is set.
   * @property {string} [stroke] - [stroke='#333'] - The shape's stroke color.
   * @property {number} [strokeWidth] - [strokeWidth=0.5] - The shape's stroke width.
   * @property {any} [features] - [features] - A list of GeoJSON features. Use this if you want to draw a subset of the features in `$data` while keeping the zoom on the whole GeoJSON feature set. By default, it plots everything in `$data.features` if left unset.
   * @property {(payload: { e: MouseEvent, props: any }) => void} [onFeatureMousemove] - Callback for mousemove event on a feature.
   * @property {() => void} [onMouseout] - Callback for mouseout event.
   */

  /** @type {Props} */
  let {
    projection,
    fixedAspectRatio = undefined,
    fill = undefined,
    stroke = '#333',
    strokeWidth = 0,
    features = undefined,
    onFeatureMousemove,
    onMouseout
  } = $props();

  let fitSizeRange = $derived(fixedAspectRatio ? [100, 100 / fixedAspectRatio] : [$width, $height]);

  let projectionFn = $derived(projection()
    .fitSize(fitSizeRange, $data));

  let geoPathFn = $derived(geoPath(projectionFn));
  $effect(()=>{console.log(geoPathFn)})
  function handleMousemove(feature) {
    return function handleMousemoveFn(e) {
      raise(this);
      // When the element gets raised, it flashes 0,0 for a second so skip that
      if (e.layerX !== 0 && e.layerY !== 0) {
        console.log('mousemove in MapSvg', feature.properties);
        onFeatureMousemove?.({ e, props: feature.properties });
      }
    }
  }
</script>

<g
  class="map-group"
  onmouseout={(e) => onMouseout?.()}
  onblur={(e) => onMouseout?.()}
>
  {#each (features || $data.features) as feature}
    <path
      class="feature-path"
      fill="{fill || $zGet(feature.properties)}"
      stroke={stroke}
      stroke-width={strokeWidth}
      d="{geoPathFn(feature)}"
      onmousemove={handleMousemove(feature)}
    ></path>
  {/each}
</g>

<style>
  /* .feature-path {
    stroke: #333;
    stroke-width: 0.5px;
  } */
  .feature-path:hover {
    stroke: rgb(43, 158, 110);
    stroke-width: 0.5px;
  }
  /**
   * Disable the outline on feature click.
   * Depending on map funtionality and accessiblity issues,
   * you may not want this rule. Read more:
   * https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
   * https://github.com/mhkeller/layercake/issues/63
   */
  .feature-path:focus {
    outline: none;
  }
</style>
