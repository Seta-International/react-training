import { combineReducers } from 'redux'
import todos from './todos'
import fetch from './fetch'

export default combineReducers({
  todos,
  fetch
})
