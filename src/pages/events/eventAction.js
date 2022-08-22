/** @format */

import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants'

const CreateEvent = (event) => {
  return {
    type: CREATE_EVENT,
    payload: event,
  }
}

const UpdateEvent = (event) => {
  return {
    type: UPDATE_EVENT,
    payload: event,
  }
}

const DeleteEvent = (eventID) => {
  return {
    type: DELETE_EVENT,
    payload: eventID,
  }
}

export { CreateEvent, UpdateEvent, DeleteEvent }
