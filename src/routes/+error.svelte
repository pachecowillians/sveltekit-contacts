<script>
	import { page } from '$app/stores';
	import '../styles/global.css';
</script>

<div class="container">
	<nav>
		<a href="/">
			<img class="logo" src="/logo.svg" alt="Header logo" />
		</a>
	</nav>
	<main>
		<span>{$page.status}</span>
		<span>{$page.error.message}</span>
	</main>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		padding: 2rem;
	}
	.logo {
		width: 7rem;
	}
	nav {
		margin-top: 1rem;
		text-align: center;
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	main {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		flex: 1;
		color: var(--primary-color);
	}

	main span {
		font-size: 2rem;
		font-weight: normal;
	}

	main span:first-child {
		border-right: 2px solid var(--primary-color);
		padding: 2rem;
	}
</style>
