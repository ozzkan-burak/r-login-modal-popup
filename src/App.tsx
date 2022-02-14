
import { useState } from 'react';
import './App.css';

// component
import BaseModalWrapper from './modalPopup/BaseModalWrapper';
import RWDModal from './modalPopup/RWDModalProps';

function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <RWDModal isModalVisible={isModalVisible} onBackDrop={toggleModal} header='Login' message='Please login' />
    </div>
  );
}

export default App;
