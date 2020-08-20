import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  *, *::before, *::after {
    
    box-sizing: border-box;
    border: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    outline: 0 !important;
  }
  button, button:focus, input:focus, textarea:focus, select:focus {
    outline: 0 !important;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: "color 9999s ease-out,  background-color 9999s ease-out";
      transition-delay: 9999s;
  }
  
  html {
    font-size: 65.5%;
  }
  body {
    font-family:'Roboto', sans-serif;
    font-size: 1.6rem;
    background: ${(props) => (props.dark ? ({theme}) => theme.dark100 : ({theme}) => theme.white)};
  }
  h1{ 
    font-family: 'Merriweather', serif;
    color: ${(props) => (props.dark ? ({theme}) => theme.white100 : ({theme}) => theme.dark200)};
  }
  p{
    color: ${(props) => (props.dark ? ({theme}) => theme.white100T : ({theme}) => theme.dark300)};
  }
  li{
    color: ${(props) => (props.dark ? ({theme}) => theme.white100 : ({theme}) => theme.dark200)};
  }


  @media (max-width: 480px) {
    html{
      font-size: 45%;
    }
  }
  `;
  
export default GlobalStyle;
