/** @format */

import { useSelector } from 'react-redux'
import TestModal from './TestModal'
import TestModal2 from './TestModal2'
import LoginForm from '../../../pages/auth/LoginForm'
const ModalManager = () => {
  const modalLookup = {
    TestModal,
    TestModal2,
    LoginForm,
  }
  const currentModal = useSelector((state) => state.modals)
  let renderModal
  if (currentModal) {
    const { modalType, modalProps } = currentModal
    const ModalComponent = modalLookup[modalType]
    renderModal = <ModalComponent {...modalProps} />
  }

  return <span>{renderModal}</span>
}

export default ModalManager
