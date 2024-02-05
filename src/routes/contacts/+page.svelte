<script>
	let call_href = 'javascript:void(0)';
</script>

<main>
	<h2>Contacts</h2>
	<div class="contacts">
		{#each Array(30) as _, i (i)}
			<a href={`/contacts/${i}`}>
				<div class="contact-card">
					<img class="avatar" src="contact.png" alt="Imagem Centralizada" />
					<div class="contact-info">
						<div class="contact-name">Jessie McGrath</div>
						<div class="contact-email">mcgrj@zmail.com</div>
					</div>
					<a href={call_href}>
						<img src="call.svg" alt="Imagem Centralizada" />
					</a>
				</div>
			</a>
		{/each}
	</div>
</main>

<style>
	main h2 {
		align-self: center;
		margin-top: 2rem;
		color: var(--primary-color);
	}

	.contacts {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
		justify-items: center;
		gap: 1rem 3rem;
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
		width: 21rem;
		max-width: 23rem;
		cursor: pointer;
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
		margin-bottom: 0.2rem;
		color: var(--primary-color);
	}

	.contact-email {
		color: var(--secondary-text-color);
	}

	.contact-card a img {
		padding: 0 0.2rem;
		line-height: 0;
		width: 2rem;
	}

	@media screen and (min-width: 768px) {
		.contacts {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: 1240px) {
		.contacts {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
