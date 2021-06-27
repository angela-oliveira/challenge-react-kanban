import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  position: relative;
  background: #FFF;
  margin: 10px;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  
  header {
    font-weight:bold;
    text-transform: capitalize;
    width:100%;
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  p {
    font-weight: 500;
    line-height: 20px;
  }
`;
export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  
`;
export const ErrorMessage = styled.div`

  font-size: 10px;
  color: #F00;
  font-weight: 500;
  margin-top: 15px;
`
export const ContentDescription = styled.div `
  min-height: 70px;
`