<script>
	import '../../styles/global.css';
</script>

<div class="container">
	<nav>
		<a href="/">
			<img src="/logo.svg" alt="Header logo" />
		</a>
	</nav>
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	nav img {
		width: 7rem;
		margin-top: 1rem;
	}

	nav {
		text-align: center;
		margin-bottom: 20px;
	}
</style>
