/** @format */

import { Link } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const SignedInMenu = ({ authenticatedHandler, onShowNav }) => {
  let navigate = useNavigate()
  const logoutHandler = () => {
    navigate('/')
    authenticatedHandler(false)
    onShowNav(false)
  }
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='creatEvent' text='Create Event' icon='plus' />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item text='Sign Out' icon='power' onClick={logoutHandler} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}

export default SignedInMenu
