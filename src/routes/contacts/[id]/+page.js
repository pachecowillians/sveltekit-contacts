
export const load = async ({ fetch, params }) => {

	let id = params.id

	const res = await fetch(`https://reqres.in/api/users/${id}`);
	const user = await res.json();

	if (res.ok) {
		return {
			user
		};
	}

	return {
		status: res.status,
		error: new Error('Could not fetch the users')
	};
};
