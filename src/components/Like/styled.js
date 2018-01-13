import styled from 'styled-components';

const __Like__ = styled.div`
  i{
    color: ${props => props.liked ? 'red' : 'grey'}
  }
`;

export {__Like__};