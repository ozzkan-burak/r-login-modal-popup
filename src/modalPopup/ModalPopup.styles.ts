import styled from 'styled-components';

const ModalContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`

  border-radius: 7px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  padding: 40px;
  width: 450px;
  fot-size: 26px;
`;

export const ModalHeader = styled.h3 `
  color: white;
  font-size:35px;
  line-height 1em;
  font-weight: 300;
  margin: 5px 0 10px;
  text-align: center;
`;

export const Overlay = styled.div `
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  display: flex;
  justify-content: center;
  align-items: center;
`;