/** @format */
import { Segment, Item } from 'semantic-ui-react'
const EventDetailedSlidebar = ({ attendee }) => {
  const attendees = attendee.length

  return (
    <>
      <Segment textAlign='center' style={{ border: 'none' }} attached='top' secondary inverted color='teal'>
        {attendees} {attendees > 1 ? 'People' : 'Person'} Going
      </Segment>
      <Segment attached>
        <Item.Group relaxed divided>
          {attendee.map((atd) => (
            <Item key={atd.id} style={{ position: 'relative' }}>
              <Item.Image size='tiny' src={atd.photoURL || '/assets/user.png'} />
              <Item.Content verticalAlign='middle'>
                <Item.Header as='h3'>
                  <span>{atd.name}</span>
                </Item.Header>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </Segment>
    </>
  )
}
export default EventDetailedSlidebar
