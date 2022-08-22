/** @format */

import { Grid } from 'semantic-ui-react'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedSlidebar from './EventDetailedSlidebar'
import EventDetailedInfor from './EventDetailInfo'

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader />
        <EventDetailedInfor />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSlidebar />
      </Grid.Column>
    </Grid>
  )
}
export default EventDetailedPage
