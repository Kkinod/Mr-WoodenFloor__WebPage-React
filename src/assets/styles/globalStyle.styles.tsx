import { createGlobalStyle } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
  
  *, 
  *::after, 
  *::before {
    margin: 0;
	padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: 'Lato', sans-serif;
	font-weight: 400;
	line-height: 1.7;
    box-sizing: border-box;
  }
`;
