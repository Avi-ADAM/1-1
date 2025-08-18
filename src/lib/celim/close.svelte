<script>
  /**
   * @typedef {Object} Props
   * @property {number} [width]
   * @property {number} [height]
   * @property {boolean} [inl]
   */

  /** @type {Props} */
  let { width = 24, height = 24, inl = false } = $props();
    </script>

<svg  style="width:{width}px;height:{height}px; display:{inl == false ? 'block' : 'inline'};" viewBox="3 3 18 18">
  <path fill="currentColor" d="M8.27,3L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3M8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41" />
</svg>