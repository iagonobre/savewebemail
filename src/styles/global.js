import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  ::-webkit-input-placeholder {
   color: #f0f0f5;
  }

  :-moz-placeholder { /* Firefox 18- */
   color: #f0f0f5;  
  }

  ::-moz-placeholder {  /* Firefox 19+ */
   color: #f0f0f5;  
  }

  :-ms-input-placeholder {  
   color: #f0f0f5;  
  }

  button{
    border: none;
    outline-style: none;
  }

  button:hover {
    border: none;
    outline-style: none;
  }

  html {
    font-family: 'Roboto', sans-serif;
  }

  header {
    margin: 0 auto;
    padding-top: 4px;
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: 1100px;
  }
  
  a {
    text-decoration: none;
  }

  body {
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }
`;
