export const load = async ({ fetch }) => {
	const res = await fetch('https://dummyjson.com/users?limit=50');
	const users = await res.json();

	if (res.ok) {
		return {
			users
		};
	}

	return {
		status: res.status,
		error: new Error('Could not fetch the users')
	};
};
