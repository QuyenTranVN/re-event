/** @format */

import { Button, Menu } from 'semantic-ui-react'

const SignedOutMenu = ({ authenticatedHandler }) => {
  return (
    <Menu.Item position='right'>
      <Button basic inverted content='Login' onClick={() => authenticatedHandler(true)} />
      <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
    </Menu.Item>
  )
}
export default SignedOutMenu
