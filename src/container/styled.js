import styled from 'styled-components'

export const __Home__ = styled.div`
  display: flex;
  .bars{
    width: 50px;
    height: 50px;
    background: orange;
    border-radius: 40px ;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 20px 0 0 20px;
    i{
      color: white;
    }
  }
`;

export const __Sidebar__ = styled.div`
    width: 20%;
    height: 100vh;
    background-color: #222b37;
    
    
    i {
      position: relative;
      left: 92%;
      cursor: pointer;
      &:hover{
        color: white;
      }
    }
    
    ul{
      padding-left: 0;
      li{
        list-style: none;
        &:hover{
          background-color: #646f79;
          cursor: pointer;
        }
        a {
          display: block;
          padding-left: 5px;
          text-decoration: none;
          color: white;
          font-size: 15px;
          .order{
            margin-right: 5px;
          }
        }
      }
    }
`;

export const __Content__ = styled.div`
   width: 100%;
   padding: 20px 0 0 20px;
`;