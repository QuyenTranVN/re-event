/** @format */

import {
  asyncActionError,
  asyncActionfinish,
  asyncActionStart,
} from '../../app/api/async/asyncReducer'
import { fetchSampleData } from '../../app/api/mockApi'
import { CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT } from './eventConstants'

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

const loadEvent = () => {
  return async (dispatch) => {
    dispatch(asyncActionStart())
    try {
      const events = await fetchSampleData()
      dispatch({ type: FETCH_EVENT, payload: events })
      dispatch(asyncActionfinish())
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }
}

export { CreateEvent, UpdateEvent, DeleteEvent, loadEvent }
