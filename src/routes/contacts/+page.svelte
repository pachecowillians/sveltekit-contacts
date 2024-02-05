<script>
	import '../../styles/global.css';
</script>

<div class="container">
	<div class="header">
		<a href="/">
			<img class="image" src="logo.svg" alt="Imagem Centralizada" />
		</a>
	</div>
	<h2>Contacts</h2>
	<div class="contacts">
		{#each Array(20) as _, i (i)}
			<div class="contact-card">
				<img class="avatar" src="contact.png" alt="Imagem Centralizada" />
				<div class="contact-info">
					<div class="contact-name">Jessie McGrath</div>
					<div class="contact-email">mcgrj@zmail.com</div>
				</div>
				<a href="/contact" class="call">
					<img src="call.svg" alt="Imagem Centralizada" />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
	}

	.image {
		width: 7rem;
		margin-top: 1rem;
	}

	.container h2 {
		align-self: flex-start;
		margin-top: 2rem;
	}

	.header {
		text-align: center;
		margin-bottom: 20px;
	}

	.contacts {
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.contact-card {
		background-color: #ffffff;
		border-radius: 10px;
		padding: 0.5rem 1rem;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		width: 100%;
		margin: 0.5rem;
	}

	.contact-card > img {
		width: 5rem;
		border-radius: 50%;
	}

	.contact-card .contact-info {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.contact-name {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.contact-email {
		color: #888;
	}

	.call {
		width: 1.5rem;
		text-align: center;
		align-self: center;
		justify-self: center;
	}

	.call {
		padding: 0;
		margin: 0;
		list-style: none;
		line-height: 0;
	}

	@media (max-width: 768px) {
	}
</style>
