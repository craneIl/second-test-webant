import api from '.'

export default async function requestGallery(
	page,
	isNew = null,
	popular = null
) {
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

