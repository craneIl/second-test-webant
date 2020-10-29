import api from '.'

export default async (file) => {
	const formData = new FormData()
	formData.append('file', file)

	const fileUploadResponse = await api.post('/api/media_objects', formData, {
		headers: {
			Authorization: `Bearer ${localStorage.getItem('access_token')}`,
		},
		timeout: 6000,
	})

	return fileUploadResponse.data.id
}
