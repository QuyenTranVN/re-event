/** @format */
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedInMenu from './SignedOutMenu'
import SignedOutMenu from './SignedInMenu'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../app/common/modals/modalReducer'
const NavBar = () => {
  const auth = useSelector((state) => state.auth.authenticated)
  const dispatch = useDispatch()
  const data = 'hello, this is a test'
  const header = 'This is header'

  const data2 = 'hello, this is a test2'
  const header2 = 'This is header2'
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} name='Events' to='/events' />
        <Menu.Item>
          <Button
            content='Open Modal'
            positive
            inverted
            onClick={() =>
              dispatch(openModal({ modalType: 'TestModal', modalProps: { data, header } }))
            }
          />
        </Menu.Item>

        <Menu.Item>
          <Button
            content='Open Modal 2'
            positive
            inverted
            onClick={() =>
              dispatch(openModal({ modalType: 'TestModal2', modalProps: { data2, header2 } }))
            }
          />
        </Menu.Item>
        {auth && (
          <Menu.Item>
            <Button
              as={NavLink}
              to='/events/createEvent'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
        )}
        {auth ? <SignedOutMenu /> : <SignedInMenu />}
      </Container>
    </Menu>
  )
}
export default NavBar
