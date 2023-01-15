import { createGlobalStyle } from 'styled-components'

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

	@include respond(tab-land) {	// <=1200px
		font-size: 56.25%;	// 9px	
	}

	@include respond(tab-port) {	// <=900px
		font-size: 50%;	// 8 px
	}

	@include respond(big-desktop) {	// >=1800
		font-size: 62.5%;	// 12px
	}
  }

  body {
    font-family: 'Lato', sans-serif;
	font-weight: 400;
	line-height: 1.7;
    box-sizing: border-box;
  }
`
