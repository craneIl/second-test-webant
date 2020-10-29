import api from '.'

export default async (password, username) => {
	const response = await api.get('/oauth/v2/token', {
		params: {
			client_id: localStorage.getItem('randomId'),
			grant_type: `password`,
			password: password,
			username: username,
			client_secret: localStorage.getItem('secret'),
		},
	})
	
	if (response.status !== 200) {
		throw new Error(response);
	}

	return {
		access: response.data.access_token,
		refresh: response.data.refresh_token,
	}
}
