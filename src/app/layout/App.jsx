/** @format */
import { useState } from 'react'
import { Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar'
import './Style.css'
function App() {
  const [formOpen, setFormOpen] = useState(false)
  const [selectedEvent, setselectedEvent] = useState(null)
  const formCloseHandler = () => {
    setFormOpen(false)
  }
  const handleSelectEvent = (event) => {
    setselectedEvent(event)
    setFormOpen(true)
  }
  const handleCreateFormOpen = () => {
    setselectedEvent(null)
    setFormOpen(true)
  }
  return (
    <Fragment>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard formOpen={formOpen} formClose={formCloseHandler} selectEvent={handleSelectEvent} selectedEvent={selectedEvent} />
      </Container>
    </Fragment>
  )
}

export default App
