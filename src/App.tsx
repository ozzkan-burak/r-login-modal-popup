
import { useState } from 'react';
import './App.css';

// component
import LoginModal from './modalPopup/LoginModal';

// type
import {LoginFunction} from './interface/loginModalProps';


function App() {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(wasModalVisible => !wasModalVisible)
  }

  const onBackdropClick = () => {
    setModalVisible(false);
  }

  const onLoginRequested: LoginFunction = async ({password, login}: any) => {
    console.log(password, login);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <LoginModal 
        onBackdropClick={onBackdropClick}
        onLoginRequested={onLoginRequested}
        isModalVisible={isModalVisible}
      />
    </div>
  );
}

export default App;
