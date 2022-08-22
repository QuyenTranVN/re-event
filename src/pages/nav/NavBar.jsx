/** @format */
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedInMenu from './SignedOutMenu'
import SignedOutMenu from './SignedInMenu'
import { useState } from 'react'
const NavBar = ({ setFormOpen, onShowNav }) => {
  const [authenticated, setAuthenticated] = useState(false)
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header onClick={() => onShowNav(false)}>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} name='Events' to='/events' />
        {authenticated && (
          <Menu.Item>
            <Button as={NavLink} to='/events/createEvent' positive inverted content='Create Event' onClick={() => setFormOpen()} />
          </Menu.Item>
        )}
        {authenticated ? <SignedOutMenu authenticatedHandler={setAuthenticated} onShowNav={onShowNav} /> : <SignedInMenu authenticatedHandler={setAuthenticated} />}
      </Container>
    </Menu>
  )
}
export default NavBar
