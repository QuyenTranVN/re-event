/** @format */

import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DeleteEvent } from '../eventAction'
import format from 'date-fns/format'
const EventListItem = ({ event }) => {
  const dispatch = useDispatch()
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Event hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {format(event.date, 'HHHH d, yyyy h:mm a')}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <span> {event.description} </span>
        <div>
          <Button
            color='red'
            floated='right'
            content='Delete'
            onClick={() => dispatch(DeleteEvent(event.id))}
          />

          <Button
            color='teal'
            floated='right'
            content='View'
            as={Link}
            to={`/events/${event.id}`}
          />
        </div>
      </Segment>
    </Segment.Group>
  )
}
export default EventListItem
