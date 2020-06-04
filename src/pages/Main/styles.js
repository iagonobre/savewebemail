import styled from 'styled-components';
import imageBackground from '../../assets/home-background.svg';
import logIn from '../../assets/log-in.svg';
// Title = h3
// Slogan = h1
// Paragrafo = p
// A = a
// Butao = button

export const Page = styled.div`
  height: 100vh;
  background: url(${imageBackground}) no-repeat;
  background-position: 50vw bottom;
`

export const Container = styled.main`
  width: 90%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  main {
    max-width: 600px;
    height: 580px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #231440;
  }
`

export const Slogan = styled.h1`
  font-size: 45px;
  color: #AF01AD;
  font-family: 'Ubuntu', sans-serif;
  line-height: 45px;
`

export const Paragrafo = styled.p`
  margin-top: 24px;
  font-size: 21px;
  line-height: 28px;
  color: #231440;
`

export const Text = styled.p`
  margin-top: 15px;
  font-size: 21px;
  line-height: 28px;
  color: #231440;
  margin-top: 20px;
  font-size: 17px;
`

export const Header = styled.div`   
  background: linear-gradient(90deg, #AF01AD, #492885, #231440);
`

export const A = styled.div`
  display: flex;
  a{
    display: flex;
    color: white;
    font-weight: 700;
  }
  span {
    margin-right: 16px;
    display: flex;

    background-image: url(${logIn});

    width: 20px;
    height: 20px;
  }
`

export const SubmitButton = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  position: relative;
  background-color: #8B01A1;
  width: 100%;
  max-width: 55px; 
  height: 63px;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;

  svg {
    width: 23px;
    height: 23px;
    margin-right: 10px;
    position: absolute;
    color: #f0f0f5;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const Butao = styled.div`
  display: flex;
  height: 55px;
  width: 100%;
  max-width: 390px; 
  margin-top: 15px;
  position: relative;
  svg {
    width: 23px;
    height: 23px;
    left: 20px;
    top: 21px;
    position: absolute;
    color: #f0f0f5;
  }
  input[type="email"] {
    padding-left: 60px;
    width: 100%;
    max-width: 320px; 
    height: 55px;
    font-size: 18px;
    color: white;
    font-family: 'Roboto', sans-serif;
    background-color: #AF01AD;
    display: flex;
    align-items: center;

    border-width: 4px;
    border-style: solid;
    border-color: #AF01AD;
    border-image: initial;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    transition: border 0.2s ease 0s;
  }
  input:focus {
    border-style: solid;
    border-color: #8B01A1;
    border-image: initial;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  form {
    display: flex;
    flex-direction: column;
  }
`