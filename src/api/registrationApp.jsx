import api from '.'

export default async () => {
	if (
		localStorage.getItem('secret') !== null &&
		localStorage.getItem('randomId') !== null
	) {
		return
	}
	const response = await api.post('/api/clients',{				
		name: `exampleApp`,
		allowedGrantTypes: [`password`],	
	})
	
	localStorage.setItem('secret', response.data.secret);
	localStorage.setItem('randomId', response.data.id + '_' + response.data.randomId);
}
