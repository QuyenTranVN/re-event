/** @format */

import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  let navigate = useNavigate()
  const startEventHandler = () => {
    navigate('/events')
  }

  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' style={{ marginBottom: 12 }} />
          Re-events
        </Header>
        <Button size='huge' inverted onClick={startEventHandler}>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  )
}
export default HomePage
