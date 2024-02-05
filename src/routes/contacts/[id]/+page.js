
export const load = async ({ fetch, params }) => {

	let id = params.id

	const res = await fetch(`https://dummyjson.com/users/${id}`);
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
