import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 18px;
    background: #FFF;
    border: 0;
    cursor: pointer;
  }
  input {
    width: 220px;
    margin-top: 10px;
    border: 0;
    height: 48px;
    font-size: 15px;
    font-weight: 500;
    color: #223254;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    overflow: hidden;
  }

`;