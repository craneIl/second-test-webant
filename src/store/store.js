import { createStore } from 'redux'
import reducer from '../store/reducers/reducerAuth'

const store = createStore(reducer)

export default store
