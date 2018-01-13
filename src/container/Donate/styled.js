import styled from 'styled-components';

//TODO style code refactoring
const __Donate__ = styled.div`
  .still-needed{
    width: 350px;
    margin: 20px auto 0;
    background-color: #191212c4;
    border-radius: 4px;
    p{
      padding-top: 10px;
      text-align: center;
      font: 15px 'Helvetica Neue';
      color: white;
      .bold{
        font-weight: 600;
      }
    }
    .triangle{
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid #191212c4;
        position: relative;
        top: 10px;
        left: 91%;
      }
    }
    
  }
  .donate-form{
    width: 350px;
    height: 250px;
    margin: 15px auto;
    box-shadow: 0px 0px 12px 1px rgba(184,185,186,1);
    .slider{
      width: 100%;
    .rangeslider-horizontal{
      cursor: pointer;
      height: 12px;
      background-color: #efefef;
    }
    .rangeslider__fill{
      height: 100%;
      background-color: #FF9800;
      top: 0;
    }
    .rangeslider__handle{
    display: none;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      top: 50%;
      transform: translate3d(-50%,-50%,0);
    }
    .rangeslider__handle-label{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
    .title{
      font: 16px 'Helvetica Neue';
      text-align: left;
      padding-top: 20px;
      width: 77%;
      margin: 0 auto;
      .picked{
        color: #ff340a;
        margin-right: 4px;
        font-weight: 600;
      }
    }
    .description{
      font: 16px 'Helvetica Neue';
      text-align: left;
      padding-top: 30px;
      width: 77%;
      margin: 0 auto;
    }
  .input-container{
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    input{
      width: 100px;
    }
   }
   .reason{
    font: 13px 'Helvetica Neue';
    width: 76%;
    margin: 0 auto;
    padding-top: 2px;
   }
  }

  .additional-buttons{
    display: flex;
    justify-content: space-around;
    max-width: 350px;
    margin: 0 auto;
    .additional-buttons-item{
      background-color: #f7f7f7;
      border-radius: 4px;
      padding: 5px;
      font: 16px 'Helvetica Neue';
      box-shadow: 0 0 0 2px rgba(230, 230, 230, 0.79);
    }
  }
`;

export {__Donate__};