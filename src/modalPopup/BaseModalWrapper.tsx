import { IBaseModalWrapperProps } from "../interface/baseModalWrapper"
import Modal from "./Modal"
import { DesktopModalContainer, ModalHeader } from "./ModalPopup.styles"

const BaseModalWrapper: React.FC<IBaseModalWrapperProps> = ({onBackDrop, isModalVisible}) => {

  if(!isModalVisible) {
    return null
  }

  return (
    <Modal onBackDrop={onBackDrop} >
      <DesktopModalContainer>
        <ModalHeader>Modal Info</ModalHeader>
      </DesktopModalContainer>
    </Modal>
  )
}

export default BaseModalWrapper