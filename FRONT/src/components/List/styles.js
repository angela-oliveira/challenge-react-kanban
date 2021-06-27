import styled from 'styled-components';

export const Container = styled.div`
padding: 0 15px;
height: 100%;
flex: 0 0 320px;

& + div {
  border-left: 1px solid rgba(0, 0, 0, 0.05);
}
header {

}
ul {
  margin-top: 30px;
}
  
`;
export const HeaderList = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  background-color: #FFF;
  width: 250px;
  margin: 5px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  h2 {
    font-size: 16px;
    padding: 0 10px;
  }
`;
export const Count = styled.div`
  height: 20px;
  width: 20px;
  font-size: 10px;
  padding: 5px;
  text-align:center;
  border-radius: 50%;
  background-color: #a6a6a6;
  font-weight: bold;
  margin: 10px;
  color: #FFF;
`