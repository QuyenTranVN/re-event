/** @format */
import { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import EventForm from '../eventForm/EventForm'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData'
const EventDashboard = ({ formOpen, formClose, selectEvent, selectedEvent }) => {
  const [events, setEvents] = useState(sampleData)

  const handleCreateEvent = (event) => {
    setEvents([...events, event])
  }

  const handleUpdatingEvent = (updateEvent) => {
    setEvents(events.map((event) => (event.id === updateEvent.id ? updateEvent : event)))
  }

  const handleDeleteEvent = (eventID) => {
    setEvents(events.filter((event) => event.id !== eventID))
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} onDeleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>{formOpen && <EventForm setFormClose={formClose} createEvent={handleCreateEvent} selectedEvent={selectedEvent} key={selectedEvent ? selectedEvent.id : null} onUpdateEvent={handleUpdatingEvent} />}</Grid.Column>
    </Grid>
  )
}
export default EventDashboard
