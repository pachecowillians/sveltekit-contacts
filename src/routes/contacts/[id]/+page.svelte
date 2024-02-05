<script>
	import Button from '$lib/button.svelte';
</script>

<main>
	<div class="profile-picture">
		<img src="/contact.png" alt="Imagem Centralizada" />
	</div>
	<div class="profile-name">Ethelyn Ferreras</div>
	<div class="profile-email">sroots85@wunderground.com</div>
	<Button img_src="/call.svg" href="javascript:void(0)" />
</main>

<style>
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
</style>
