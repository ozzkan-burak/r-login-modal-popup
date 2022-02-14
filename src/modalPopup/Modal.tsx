import ReactDOM from 'react-dom';
import { IModalProps } from "../interface/modal"


const Modal: React.FC<IModalProps> = ({onBackDrop, children}) => {
  return ReactDOM.createPortal (
    <div onClick={onBackDrop}>
        <span>Modal</span>
        </div>, document.getElementById('modal-root')!
  )
}

export default Modal