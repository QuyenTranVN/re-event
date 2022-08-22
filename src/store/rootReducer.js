/** @format */

import { combineReducers } from 'redux'
import eventReducer from '../pages/events/eventReducer'

const rootReducer = combineReducers({
  event: eventReducer,
})

export default rootReducer
