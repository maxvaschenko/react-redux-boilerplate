import styled from 'styled-components'

export const __Home__ = styled.div`

  margin: 0 auto;
  width: max-content;
  .calendar-title{
    margin: 15px 0;
    font-size: 1.5em;
    font-weight: 700;
    padding-left: 10px;
  }
  .months{
    display: flex;
    flex-wrap: wrap;
    .month-col{
    display: flex;
    flex-direction: column;
    .title{
      text-align: center;
      font-weight: 700;
    }
  }
  }
  
`;