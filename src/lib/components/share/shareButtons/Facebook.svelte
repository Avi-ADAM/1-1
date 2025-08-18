<script>
	import FacebookIcon from '$lib/celim/icons/facebook.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {string} [hashtag]
	 * @property {string} [quote]
	 * @property {any} url
	 */

	/** @type {Props} */
	let { hashtag = '', quote = '', url } = $props();

	const FACEBOOK_BLUE = '#3b5998';

	const baseUrl = 'https://www.facebook.com/sharer/sharer.php';
	const parametersObject = {
		u: url,
		...(quote !== '' ? { quote } : {}),
		...(hashtag !== '' ? { hashtag } : {}),
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
	><span class="sr-only">Share on Facebook</span><FacebookIcon
		colour={FACEBOOK_BLUE}
		width={48}
	/></button
>

<style>
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
