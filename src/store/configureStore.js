/** @format */

import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}

export default configureStore
