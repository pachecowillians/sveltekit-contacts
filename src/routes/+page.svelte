<script>
	import '../styles/global.css';
</script>

<div class="content-wrapper">
	<div class="image-container">
		<img src="logo.svg" alt="Imagem Centralizada" />
	</div>

	<div class="button-container">
		<a href="/contacts" class="circle-button">
            <img src="search.svg" alt="Imagem Centralizada" />
        </a>
	</div>
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

	.image-container img {
        height: 20vh;
	}

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
