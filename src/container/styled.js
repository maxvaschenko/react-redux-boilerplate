import styled from 'styled-components'

export const __Home__ = styled.div`
  .album-list-container{
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 60px;
    .album-list-item{
      margin: 15px;
      position: relative;
      &:hover{
        div{
          i{
            visibility: visible;
          }
        }
      }
    }
  }
 
`;