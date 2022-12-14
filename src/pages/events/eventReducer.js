/** @format */

import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT } from './eventConstants'

const initialState = {
  events: [],
}

const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, payload],
      }
    case UPDATE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((event) => event.id !== payload.id), payload],
      }

    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((event) => event.id !== payload)],
      }
    case FETCH_EVENT:
      return {
        ...state,
        events: payload,
      }
    default:
      return state
  }
}
export default eventReducer
