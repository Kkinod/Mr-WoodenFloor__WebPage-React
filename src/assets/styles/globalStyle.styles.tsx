import { createGlobalStyle } from 'styled-components';
import { responsiveSize } from './mixins.styles';
import { ITheme } from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700;800&family=Lato:wght@300;400;700;900&display=swap');
  
  *, 
  *::after, 
  *::before {
    margin: 0;
	  padding: 0;
    box-sizing: inherit;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: ${({ theme }: ITheme): string => theme.colors.primary};
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px
   
    @media ${responsiveSize.tabLand} { // <=1200px
      font-size: 56.25%;	// 9px
    };

    @media ${responsiveSize.tabPort} { // <=900px
      font-size: 50%;	// 8 px
    };

    @media ${responsiveSize.bigDesktop} { // >=1800
      font-size: 75%;	// 12px
    };
  }

  body {
    font-family: 'Garamond', sans-serif;
	  font-weight: 400;
	  line-height: 1.2;
    box-sizing: border-box;
  }
`;
