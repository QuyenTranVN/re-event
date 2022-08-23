/** @format */

import { combineReducers } from 'redux'
import modalReducer from '../app/common/modals/modalReducer'
import { authReducer } from '../pages/auth/authReducer'
import eventReducer from '../pages/events/eventReducer'

const rootReducer = combineReducers({
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
})

export default rootReducer
