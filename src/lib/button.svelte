<script>
	export let img_src = 'search.svg';
	export let href = '/contacts';
</script>

<div class="button-container">
	<a {href} class="circle-button" data-sveltekit-preload-data="hover">
		<img src={img_src} alt="Button icon" />
	</a>
</div>

<style>
	.button-container {
		margin-bottom: 10vh;
		text-align: center;
		transition: all ease-in-out 0.2s;
	}

	.button-container:hover {
		transform: scale(1.1);
	}

	a.circle-button {
		display: inline-block;
		padding: 1.5rem;
		background-color: var(--secondary-color);
		border: none;
		border-radius: 50%;
		cursor: pointer;
	}

	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
