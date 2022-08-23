/** @format */

import { Link } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../auth/authActions'
const SignedInMenu = () => {
  const currentUser = useSelector((state) => state.auth.currentUser)
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(signOutUser())
    navigate('/')
  }
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL ? currentUser.photoURL : '/assets/user.png'}
      />
      <Dropdown pointing='top left' text={currentUser.email}>
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
