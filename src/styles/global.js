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

  /* LARGURA */

  @media (max-width: 900px) and (orientation: landscape) {
    #page-home {
      height: 168vh;
      background-position-y: 65vh;
    }
    #a {
      display: none;
    }
  }

  @media (max-height: 379px) and (orientation: landscape) {
    #page-home {
      height: 250vh;
      background-position-y: 65vh;
    }
  }

  @media (max-width: 900px) {
    #content {
      align-items: center;
      text-align: center;
      main {
        align-items: center;
      }
    }
    #page-home {
      background-position-x: 30vw;
    }

    #email {
      width: 50vw;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #a {
      position: absolute;
      bottom: 48px;

      left: 50%;
      transform: translateX(-50%);
      a{
        color: white;
      }
    }
  }

  @media (max-width: 587px) {
    #content {
      main {
        h1 {
          font-size: 40px;
        }
      }
    }
  }

  @media (max-width: 518px) {
    #email{
      width: 370px;
    }
    #content {
      main {
        h1 {
          font-size: 38px;
        }
        #par {
          font-size: 22px;
        }
        #txt{
          font-size: 20px;
        }
        #txt2{
          font-size: 22px;
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 495px) {
    #content {
      main {
        h1 {
          font-size: 34px;
          line-height: 40px;
        }
        #par {
          font-size: 22px;
        }
        #txt{
          font-size: 18px;
        }
        #txt2{
          font-size: 21px;
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 443px) {
    #email{
      width: 300px;
    }
    #content {
      main {
        h1 {
          font-size: 30px;
          line-height: 37px;
        }
        #par {
          font-size: 20px;
        }
        #txt{
          font-size: 16px;
        }
        #txt2{
          font-size: 19px;
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 383px) {
    #email{
      width: 265px;
    }
    #content {
      main {
        h1 {
          font-size: 27px;
          line-height: 30px;
        }
        #par {
          font-size: 17px;
          line-height: 20px;
        }
        #txt{
          font-size: 16px;
          line-height: 18px;
        }
        #txt2{
          font-size: 17px;
          line-height: 20px;
        }
      }
    }
  }

  @media (max-width: 342px) {
    #email{
      width: 220px;
      font-size: 14px;
    }
    #content {
      main {
        h1 {
          font-size: 27px;
          line-height: 27px;
        }
      }
    }
  }

  /* ALTURA */

  @media (max-width: 900px) and (orientation: portrait) {
    body {
      height: 109vh;
    }
    #page-home {
      height: 111vh;
      background-position-y: 45vh;
      background-position-x: 18vw;
    }
    #a {
      bottom: -50px;
    }
  }

  @media (max-width: 535px) {
    body {
      height: 109vh;
    }
    #page-home {
      height: 111vh;
      background-position-x: -30vw;
    }
  }

  @media (max-height: 1024) and (orientation: portrait) {
    body {
      height: 114vh;
    }
    #page-home {
      height: 120vh;
      background-position-y: 54vh;
    }
    #a {
      bottom: -50px;
    }
  }

  @media (max-height: 946px) and (orientation: portrait){
    body {
      height: 121vh;
    }
    #page-home {
      height: 127vh;
      background-position-y: 55vh;
    }
    #a {
      bottom: -200px;
    }
  }

  @media (max-height: 860px) and (orientation: portrait){
    body {
      height: 126vh;
    }
    #page-home {
      height: 138vh;
      background-position-y: 61vh;
    }
    #a {
      bottom: -280px;
    }
  }

  @media (max-height: 795px) and (orientation: portrait){
    body {
      height: 131vh;
    }
    #page-home {
      height: 145vh;
      background-position-y: 61vh;
    }
    #a {
      bottom: -280px;
    }
  }

  @media (max-height: 725px) and (orientation: portrait){
    #page-home {
      height: 160vh;
      background-position-y: 67vh;
    }
    #a {
      bottom: -320px;
    }
  }

  @media (max-height: 685px) and (orientation: portrait){
    #page-home {
      height: 175vh;
      background-position-y: 75vh;
    }
    #a {
      bottom: -470px;
    }
  }

  @media (max-height: 645px) and (orientation: portrait){
    #page-home {
      height: 188vh;
      background-position-y: 83vh;
    }
    #a {
      bottom: -470px;
    }
  }

  @media (max-height: 545px) and (orientation: portrait){
    #page-home {
      height: 217vh;
      background-position-y: 90vh;
    }
    #a {
      bottom: -470px;
    }
  }
`;
