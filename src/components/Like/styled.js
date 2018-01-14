import styled from 'styled-components';

const __Like__ = styled.div`
   width: max-content;
   position: absolute;
   top: 184px;
   left: 135px;
  i{
    visibility: ${props => props.liked ? 'visible' : 'hidden'};
    color: ${props => props.liked ? '#fbff00' : 'white'};
    background-color: gray;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 40px;
    &:hover{
      cursor: pointer;
    }
  }
`;

export {__Like__};