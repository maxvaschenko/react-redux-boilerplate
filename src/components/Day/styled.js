import styled from 'styled-components';


export const __Day__ = styled.div`
  width: 80px;
  border: 1px solid #e2e2e2;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.selected && 'red'};
  p{
    margin: 0;
  }
`;
