<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [rel]
	 * @property {string} [target]
	 * @property {any} href
	 * @property {any} ariaLabel
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		rel = '',
		target = '',
		href,
		ariaLabel,
		children
	} = $props();
</script>

<a aria-label={ariaLabel} {href} {rel} {target}>{@render children?.()}</a>