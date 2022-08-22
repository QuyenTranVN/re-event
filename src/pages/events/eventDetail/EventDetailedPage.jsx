/** @format */

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedSlidebar from './EventDetailedSlidebar'
import EventDetailedInfor from './EventDetailInfo'

const EventDetailedPage = ({ props }) => {
  let { id } = useParams()
  const event = useSelector((state) => state.event.events.find((event) => event.id === id))

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfor event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSlidebar attendee={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}
export default EventDetailedPage
