import React from 'react';
import MediaQuery from 'react-responsive';
// components
import BaseModalWrapper from './BaseModalWrapper';
// interface
import {IBaseModalWrapperProps } from '../interface/baseModalWrapper';
import { DesktopCloseButton, DesktopModalContainer, MobileCloseButton, MobileModalContainer } from './ModalPopup.styles';


type IRWDModalProps = IBaseModalWrapperProps;

const RWDModal: React.FC<IRWDModalProps> = (props) => {
  return (
   <MediaQuery minWidth={580}>
      {(matches: any) => matches ? (
        <BaseModalWrapper 
          CloseButtonComponent={DesktopCloseButton}
          ContainerComponent={DesktopModalContainer}
          {...props}
        />
      ) : (
        <BaseModalWrapper 
          CloseButtonComponent={MobileCloseButton}
          ContainerComponent={MobileModalContainer}
          {...props}
        />
      )
    }
   </MediaQuery>
  )
}

export default RWDModal;