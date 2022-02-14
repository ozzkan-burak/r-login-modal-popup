import { IBaseModalWrapperProps,IComponentsProps } from "../interface/baseModalWrapper"
// compoenents
import Modal from "./Modal"
// styles
import {  ModalHeader, Message, CloseSign } from "./ModalPopup.styles"

type Props = IBaseModalWrapperProps & IComponentsProps

const BaseModalWrapper: React.FC<Props> = ({onBackDrop, isModalVisible, header, message, ContainerComponent, CloseButtonComponent}) => {

  if(!isModalVisible) {
    return null
  }

  return (
    <Modal onBackDrop={onBackDrop} >
      <ContainerComponent>
        <CloseButtonComponent onClick={onBackDrop}>
          <CloseSign />
        </CloseButtonComponent>
        <ModalHeader>{header}</ModalHeader>
        {message && <Message>{message}</Message>}
      </ContainerComponent>
    </Modal>
  )
}

export default BaseModalWrapper