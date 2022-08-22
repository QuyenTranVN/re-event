/** @format */

import { Fragment } from 'react'
import { Container } from 'semantic-ui-react'
import NavBar from '../../../pages/nav/NavBar'

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <div>{children}</div>
      </Container>
    </Fragment>
  )
}
export default DefaultLayout
