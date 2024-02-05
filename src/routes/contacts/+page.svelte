<script>
</script>

<div class="container">
	<div class="header">
		<img class="image" src="logo.svg" alt="Imagem Centralizada" />
	</div>
	<h2>Contacts</h2>
	<!-- <div class="contacts">
		<div class="contact-card">
			<div class="contact-name">Jessie McGrath</div>
			<div class="contact-email">mcgrj@zmail.com</div>
		</div>
	</div> -->
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
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 20px;
	}

	.contact-card {
		background-color: #ffffff;
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.contact-name {
		font-size: 1.2rem;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.contact-email {
		color: #888;
	}

	@media (max-width: 768px) {
		.contacts {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
