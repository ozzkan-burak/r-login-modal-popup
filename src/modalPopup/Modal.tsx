import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { IModalProps } from "../interface/modal"
import { Overlay } from './ModalPopup.styles';



const Modal: React.FC<IModalProps> = ({onBackDrop, children}) => {
  return ReactDOM.createPortal (
    <Overlay onClick={onBackDrop}>
      <div onClick={e => e.stopPropagation()}>
        {children}
      </div>
        </Overlay>, document.getElementById('modal-root')!
  )
}

export default Modal