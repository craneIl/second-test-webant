import api from '.'

export default async (
	page,
	isNew = false,
	popular = false
) => {
	const response = await api.get('/api/photos', {
		params: {
			popular: popular,
			news: isNew,
			limit: 12,
			page,
		},
	})

	return response.data
}

