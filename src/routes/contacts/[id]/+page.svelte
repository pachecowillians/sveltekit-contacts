<script>
	import Button from '$lib/button.svelte';
	export let data;
	let user = data.user;
</script>

<a href="/contacts" class="back">
	<img src="/arrow_left.svg" alt="Header logo" />
</a>
<nav>
	<a href="/">
		<img class="logo" src="/logo.svg" alt="Header logo" />
	</a>
</nav>
<main>
	<div class="profile-picture">
		<img src={user.image.replace('set4', 'set5')} alt="Contact avatar" />
	</div>
	<div class="profile-name">{user.firstName} {user.lastName}</div>
	<div class="profile-email">{user.email}</div>
	<Button img_src="/call.svg" href="javascript:void(0)" />
</main>

<style>
	.back {
		height: 1.7rem;
		position: absolute;
		top: 3.4rem;
		left: 2.5rem;
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
		width: 12rem;
		margin: 0 auto;
		overflow: hidden;
	}
	.profile-picture img {
		border-radius: 50%;
		width: 100%;
	}
	.profile-name {
		font-size: 2rem;
		font-weight: bold;
		margin-top: 3rem;
		user-select: text;
	}
	.profile-email {
		font-size: 1rem;
		color: var(--secondary-text-color);
		margin-top: 0.5rem;
		margin-bottom: 3rem;
		user-select: text;
	}
	@media screen and (min-width: 768px) {
		nav {
			width: 75vw;
		}
		.back {
			left: 7rem;
		}
	}

	@media screen and (min-width: 1240px) {
		nav {
			width: 65vw;
		}
		.back {
			left: 10rem;
		}
	}
</style>
