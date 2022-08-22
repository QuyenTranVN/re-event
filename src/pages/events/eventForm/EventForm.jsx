/** @format */
import cuid from 'cuid'
import { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CreateEvent, UpdateEvent } from '../eventAction'
import { useNavigate } from 'react-router-dom'
const EventForm = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  const selectedEvent = useSelector((state) => state.event.events.find((event) => event.id === id))
  const dispatch = useDispatch()

  const initialValues = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValues)

  const handlerFormSubmit = (e) => {
    e.preventDefault()
    selectedEvent ? dispatch(UpdateEvent({ ...selectedEvent, ...values })) : dispatch(CreateEvent({ ...values, id: cuid, hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg', attendees: [{ photoURL: 'https://randomuser.me/api/portraits/men/20.jpg', id: cuid }] }))
    navigate('/events')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const cancelFormHandler = () => {
    navigate('/events')
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit Event' : 'Create new event'} />
      <Form onSubmit={handlerFormSubmit}>
        <Form.Field>
          <input type='text' name='title' placeholder='Event title' value={values.title} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Category' name='category' value={values.category} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Description' name='description' value={values.description} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='City' name='city' value={values.city} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='text' placeholder='Venue' name='venue' value={values.venue} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Form.Field>
          <input type='date' placeholder='Date' name='date' value={values.date} onChange={(e) => handleInputChange(e)} />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button type='button' floated='right' content='Cancel' onClick={cancelFormHandler} />
      </Form>
    </Segment>
  )
}

export default EventForm
