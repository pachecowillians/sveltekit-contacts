<script>
	export let img_src = 'search.svg';
</script>

<div class="button-container">
	<a href="/contacts" class="circle-button">
		<img src={img_src} alt="Button icon" />
	</a>
</div>

<style>
	.button-container {
		margin-bottom: 10vh;
		text-align: center;
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
