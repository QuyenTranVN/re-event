/** @format */
import cuid from 'cuid'
import { Button, Header, Segment } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CreateEvent, UpdateEvent } from '../eventAction'
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import MyTextInput from '../../../app/common/form/MyTextInput'
import MyTextArea from '../../../app/common/form/MyTextArea'
import MySelectInput from '../../../app/common/form/MySelectInput'
import { categoryData } from '../../../app/api/categoryOptions'
import MyDateInput from '../../../app/common/form/MyDateInput'

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

  const cancelFormHandler = () => {
    navigate('/events')
  }
  const validationSchema = Yup.object({
    title: Yup.string().required(),
    category: Yup.string().required(),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  })
  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit Event' : 'Create new event'} />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(UpdateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                CreateEvent({
                  ...values,
                  id: cuid(),
                  hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
                  attendees: [
                    {
                      photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
                      id: cuid(),
                      name: 'JoJo',
                    },
                  ],
                }),
              )
          navigate('/events')
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className='ui form'>
            <Header sub content='Event details' color='teal' />
            <MyTextInput name='title' placeholder='Event title' />
            <MySelectInput name='category' placeholder='Event category' options={categoryData} />
            <MyTextArea name='description' placeholder='Event description' />
            <Header sub content='Event location details' color='teal' />

            <MyTextInput name='city' placeholder='Event city' />
            <MyTextInput name='venue' placeholder='Event venue' />
            <MyDateInput
              name='date'
              placeholderText='Event date'
              timeFormat='HH:mm'
              showTimeSelect
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:m a'
            />

            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type='submit'
              floated='right'
              positive
              content='Submit'
            />
            <Button
              disabled={isSubmitting}
              type='button'
              floated='right'
              content='Cancel'
              onClick={cancelFormHandler}
            />
          </Form>
        )}
      </Formik>
    </Segment>
  )
}

export default EventForm
