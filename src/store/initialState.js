const access_token = localStorage.getItem('access_token')
const refresh_token = localStorage.getItem('refresh_token')

const initialState = {
	myName: 'ilya',
	access_token,
	refresh_token,
}

console.log('initialState:', initialState)

export default initialState
