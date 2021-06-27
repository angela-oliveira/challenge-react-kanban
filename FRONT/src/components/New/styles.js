import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 200px;
  position: relative;
  background: #FFF;
  margin: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;
  header {
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: flex-start;
  }
  
`;
export const DivButton = styled.div`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 5px;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  background-color: #FFF;
  cursor: pointer;
`;
export const ErrorMessage = styled.div`

  font-size: 10px;
  color: #F00;
  font-weight: 500;
  margin-top: 15px;
`
