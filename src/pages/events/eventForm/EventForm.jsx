/** @format */
import cuid from 'cuid'
import { useState } from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const EventForm = ({ createEvent, setFormClose, selectedEvent, onUpdateEvent }) => {
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
    selectedEvent ? onUpdateEvent({ ...selectedEvent, ...values }) : createEvent({ ...values, id: cuid, hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg', attendees: [{ photoURL: 'https://randomuser.me/api/portraits/men/20.jpg', id: cuid }] })

    setFormClose()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
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
        <Button type='button' floated='right' content='Cancel' onClick={setFormClose} />
      </Form>
    </Segment>
  )
}

export default EventForm
