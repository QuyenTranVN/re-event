/** @format */
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import { useSelector } from 'react-redux'
const EventDashboard = () => {
  const { events } = useSelector((state) => state.event)

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event])
  // }

  // const handleUpdatingEvent = (updateEvent) => {
  //   setEvents(events.map((event) => (event.id === updateEvent.id ? updateEvent : event)))
  // }

  const handleDeleteEvent = (eventID) => {
    // setEvents(events.filter((event) => event.id !== eventID))
  }
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} onDeleteEvent={handleDeleteEvent} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>Filter</h1>
      </Grid.Column>
    </Grid>
  )
}
export default EventDashboard
