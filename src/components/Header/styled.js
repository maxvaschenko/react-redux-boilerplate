import styled from 'styled-components';

const __Header__ = styled.div`
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  box-shadow: 0px -2px 16px -2px rgba(168,159,168,1);
  z-index: 9999;
  header{
    display: flex;
    width: 90%;
    height: 50px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    p{}
    a{
      text-decoration: none;
      color: #606c76;
      .donate{
        display: flex;
        align-items: center;
          p{
            margin-right: 6px;
          }
      }
    }
    
  }
`;

export {__Header__};