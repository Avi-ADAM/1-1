<script>
	import EmailIcon from '$lib/celim/icons/Email.svelte';

	let { title, body } = $props();

	const baseUrl = 'mailto:';
	const parametersObject = {
		body: body,
		subject: title,
	};
	const params = Object.entries(parametersObject)
		.filter(([, value]) => value ?? false)
		.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
		.join('&');

	const urlWithParameters = params === '' ? baseUrl : `${baseUrl}?${params}`;

	
</script>

<a href="{urlWithParameters}"
	><span class="sr-only">Share on Email</span><EmailIcon
		width={48}
	/></a
>

<style>

	a {
		background: transparent;
		border-style: none;
		transition: all 0.2s ease-in-out;
	}

		a {
			transition: all 2s ease-in-out;
		}

	a:focus,
	a:hover {
		transform: scale(1.1);
	}

</style>