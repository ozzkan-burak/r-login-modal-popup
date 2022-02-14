
import { useState } from 'react';
import './App.css';

// component
import BaseModalWrapper from './modalPopup/BaseModalWrapper';

function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <BaseModalWrapper isModalVisible={isModalVisible} onBackDrop={toggleModal} />
    </div>
  );
}

export default App;
