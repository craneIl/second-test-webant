/* eslint-disable no-lone-blocks */
import initialState from '../initialState'
import add_access_token from '../actions/add_access_token'
import delete_access_token from '../actions/delete_access_token'


export default function reducer_1(state = initialState, action) {
	switch (action.type) {
		case add_access_token: {
			localStorage.setItem('access_token', action.value.access)
			localStorage.setItem('refresh_token', action.value.refresh)

			return {
				...state,
				access_token: action.value.access,
				refresh_token: action.value.refresh,
			}
		}
		case delete_access_token: {
			localStorage.removeItem('access_token')
			localStorage.removeItem('refresh_token')

			return {
				...state,
				access_token: null,
				refresh_token: null,
			}
		}

		default:
			return state
	}
}
