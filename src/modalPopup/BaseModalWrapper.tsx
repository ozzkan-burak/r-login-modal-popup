import { IBaseModalWrapperProps } from "../interface/baseModalWrapper"
import Modal from "./Modal"

const BaseModalWrapper: React.FC<IBaseModalWrapperProps> = ({onBackDrop, isModalVisible}) => {

  if(!isModalVisible) {
    return null
  }

  return (
    <Modal onBackDrop={onBackDrop} />
  )
}

export default BaseModalWrapper