<script>
	import TwitterIcon from '$lib/celim/icons/twiter.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {any} [hashtags] - array of hashtags exclude '#' e.g. ['svelte', 'askRodney']
	 * @property {any} [quote]
	 * @property {any} [related] - array of Twitter users (including '@')
	 * @property {any} title - text in Tweet
	 * @property {any} url
	 * @property {string} [via] - include '@' e.g. '@askRodney'
	 */

	/** @type {Props} */
	let {
		hashtags = [],
		quote = undefined,
		related = [],
		title,
		url,
		via = ''
	} = $props();

	const TWITTER_BLUE = '#00aced';

	const baseUrl = 'https://twitter.com/share';
	const parametersObject = {
		url,
		...(hashtags.length > 0 ? { hashtags: hashtags.join(',') } : {}),
		quote,
		text: title,
		...(related.length > 0 ? { related: related.join(',') } : {}),
		...(via.length > 0 ? { via: via.slice(1) } : {}),
	};

	const params = Object.entries(parametersObject)
		.filter(([, value]) => value ?? false)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');

	const urlWithParameters = params === '' ? baseUrl : `${baseUrl}?${params}`;

	function handleClick() {
		const config = {
			height: 550,
			width: 400,
			location: 'no',
			toolbar: 'no',
			status: 'no',
			directories: 'no',
			menubar: 'no',
			scrollbars: 'yes',
			resizable: 'no',
			centerscreen: 'yes',
			chrome: 'yes',
		};
		return window.open(
			urlWithParameters,
			'',
			Object.keys(config)
				.map((key) => `${key}=${config[key]}`)
				.join(','),
		);
	}
</script>

<button onclick={handleClick}
	><span class="sr-only">Share on Twitter</span><TwitterIcon
		colour={TWITTER_BLUE}
		width={48}
	/></button
>

<style >
	button {
		background: transparent;
		border-style: none;
		transition: all 0.2s ease-in-out;
	}
		button {
			transition: all 2s ease-in-out;
		}

	button:focus,
	button:hover {
		transform: scale(1.1);
	}
	
</style>