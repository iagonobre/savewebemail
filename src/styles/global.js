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

  @media (max-width: 900px) {
    body {
      height: 180vh;
    }
    #page-home {
      height: 187vh;
      background-position-y: 82vh;
      background-position-x: 18vw;
    }

    #content {
      align-items: center;
      text-align: center;
      main {
        align-items: center;
      }
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
        color: #AF01AD;
      }
    }
  }

  @media (max-width: 700px) {
    #email {
      width: 67vw;
    }
    #page-home {
      height: 187vh;
      background-position-y: 82vh;
      background-position-x: -5vw;
    }
    #a {
      position: absolute;
      bottom: 75px;
    }
    #content {
      align-items: center;
      text-align: center;
      main {
        height: 80vh;
        align-items: center;
        h1 {
          font-size: 38px;
          line-height: 32px;
        }
        #par {
          font-size: 3vh;
        }
        #txt {
          font-size: 2.5vh;
        }
        #txt2 {
          font-size: 2.4vh;
          line-height: 3vh;
        }
      }
    }
  }

  @media (max-width: 400px) {
    #page-home {
      height: 187vh;
      background-position-y: 82vh;
      background-position-x: -35vw;
    }
    #email {
      width: 75vw;
    }
    #content {
      align-items: center;
      text-align: center;
      main {
        height: 80vh;
        align-items: center;
        h1 {
          font-size: 4.3vh;
          line-height: 30px;
        }
        #par {
          font-size: 2.8vh;
          line-height: 20px;
        }
        #txt {
          font-size: 2vh;
        }
        #txt2 {
          font-size: 2vh;
        }
      }
    }
  }
  @media (min-height: 650px) and (max-width: 580px) {
    body {
      height: 100vh;
    }
    #page-home {
      height: 166vh;
      background-position-y: 82vh;
      background-position-x: -35vw;
    }
    #content {
      align-items: center;
      text-align: center;
      main {
        height: 80vh;
        align-items: center;
        h1 {
          font-size: 4.3vh;
          line-height: 30px;
        }
        #par {
          font-size: 2.4vh;
          line-height: 20px;
        }
        #txt {
          font-size: 2vh;
        }
        #txt2 {
          font-size: 2vh;
        }
      }
    }
  }
  @media (max-width: 320px) {
    #email {
      width: 78vw;
      height: 40px;
    }
    #button {
      height: 48px;
      #svgsubmit {
      top: 7px;
      left: 12px;
      }
    }
    #content {
      main{
        h1 {
          font-size: 4.5vh;
          line-height: 30px;
        }
        #par {
          font-size: 3.2vh;
          line-height: 20px;
        }
        #txt {
          font-size: 3vh;
          line-height: 23px;
        }
        #txt2 {
          font-size: 3vh;
        }
      }
    }
  }
`;
