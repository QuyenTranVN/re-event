/** @format */

import ModalWrapper from './ModalWrapper'

const TestModal = ({ data, header }) => {
  return (
    <ModalWrapper header={header}>
      <div>Data is: {data}</div>
    </ModalWrapper>
  )
}

export default TestModal
