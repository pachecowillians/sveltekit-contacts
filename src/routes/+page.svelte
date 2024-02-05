<script>
	import '../styles/global.css';
</script>

<div class="content-wrapper">
	<div class="image-container">
		<img src="favicon.png" alt="Imagem Centralizada" />
	</div>

	<div class="button-container">
		<button>Clique Aqui</button>
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

	img {
		max-width: 100%;
		max-height: 100%;
	}

	.button-container {
		margin-bottom: 10vh;
		text-align: center;
	}

	button {
		padding: 10px 20px;
		background-color: #0074d9;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
</style>
