import { IBaseModalWrapperProps } from "../interface/baseModalWrapper"
import Modal from "./Modal"
import { DesktopModalContainer, ModalHeader, Message, DesktopCloseButton, CloseSign } from "./ModalPopup.styles"

const BaseModalWrapper: React.FC<IBaseModalWrapperProps> = ({onBackDrop, isModalVisible, header, message}) => {

  if(!isModalVisible) {
    return null
  }

  return (
    <Modal onBackDrop={onBackDrop} >
      <DesktopModalContainer>
        <DesktopCloseButton onClick={onBackDrop}>
          <CloseSign />
        </DesktopCloseButton>
        <ModalHeader>{header}</ModalHeader>
        {message && <Message>{message}</Message>}
      </DesktopModalContainer>
    </Modal>
  )
}

export default BaseModalWrapper