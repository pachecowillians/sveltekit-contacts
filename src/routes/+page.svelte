<script>
	import Button from '$lib/button.svelte';
	import '../styles/global.css';
</script>

<svelte:head>
	<title>Contacts | Home</title>
</svelte:head>

<div class="content-wrapper">
	<div class="image-container">
		<img src="logo.svg" alt="Search button" />
	</div>

	<Button img_src="/search.svg" />
</div>

<style>
	.content-wrapper {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 1;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
