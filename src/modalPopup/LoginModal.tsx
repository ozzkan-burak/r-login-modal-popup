import React from 'react'

// interface
import { ILoginModalProps } from '../interface/loginModalProps'

// components
import RWDModal from './RWDModalProps'


const LoginModal: React.FC <ILoginModalProps> = ({loginError, isModalVisible, onBackdropClick, onLoginRequested}) => {
  return (
    <RWDModal
      onBackDrop={onBackdropClick}
      isModalVisible={isModalVisible}
      header='Login'
      message='Please log in'
      content={
        <>
          <input />
          <input />
          <button>Cancel</button>
          <button>Login</button>
        </>
      }
    />
  )
}

export default LoginModal