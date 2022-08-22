/** @format */

import EventListItem from './EventListItem'
const EventList = ({ events, selectEvent, onDeleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem event={event} key={event.id} selectEvent={selectEvent} onDeleteEvent={onDeleteEvent} />
      ))}
    </>
  )
}
export default EventList
