<script>
	import Button from '$lib/button.svelte';
</script>

<nav>
	<a href="/contacts">
		<img class="back" src="/arrow_left.svg" alt="Header logo" />
	</a>
	<a href="/">
		<img class="logo" src="/logo.svg" alt="Header logo" />
	</a>
	<div />
</nav>
<main>
	<div class="profile-picture">
		<img src="/contact.png" alt="Imagem Centralizada" />
	</div>
	<div class="profile-name">Ethelyn Ferreras</div>
	<div class="profile-email">sroots85@wunderground.com</div>
	<Button img_src="/call.svg" href="javascript:void(0)" />
</main>

<style>
	.back {
		height: 1.7rem;
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
		justify-content: space-between;
		align-items: center;
		width: 80vw;
	}
	main {
		text-align: center;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		justify-content: center;
		padding-bottom: 4rem;
	}
	.profile-picture {
		border-radius: 50%;
		width: 12rem;
		margin: 0 auto;
		overflow: hidden;
	}
	img {
		width: 100%;
	}
	.profile-name {
		font-size: 2rem;
		font-weight: bold;
		margin-top: 3rem;
	}
	.profile-email {
		font-size: 1rem;
		color: #777777;
		margin-top: 0.5rem;
		margin-bottom: 3rem;
	}
	@media screen and (min-width: 768px) {
		nav {
			width: 75vw;
		}
	}

	@media screen and (min-width: 1240px) {
		nav {
			width: 65vw;
		}
	}
</style>
