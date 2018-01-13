import styled from 'styled-components';

export const __Notification__ = styled.div`
  background-color: #63b566;
  padding: 20px;
  color: white;
  opacity: 0.83;
  transition: opacity 0.75s;
  position: fixed;
  top: 4%;
  left: 0;
  right: 0;
  width: 70%;
  margin: 0 auto;
  z-index: 99999;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  .notification-block{
    display: flex;
    align-items: center;
    h3{
      margin: 10px 0;
    }
  }
  i {
    font-size: 20px;
    padding: 6px;
    cursor: pointer;
  };
  
`;
