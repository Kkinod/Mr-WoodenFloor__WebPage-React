import styled from 'styled-components/macro';
import BurgerBarsWrapper from 'components/atoms/BurgerBars/BurgerBars';

export const NavigationContainer = styled.div``;

export const BurgerBars = styled(BurgerBarsWrapper)`
    

`;

// export const NavBackground = styled.div`
//     position: fixed;
//     top: 6rem;
//     right: 6rem;
//     z-index: 1000;
//     width: 6rem;
//     height: 6rem;
//     border-radius: 50%;
//     background-image: radial-gradient(
//         ${({ theme }: ITheme): string => theme.colors.primaryLight},
//         ${({ theme }: ITheme): string => theme.colors.primaryDark}
//     );
//     transition: transform 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
// `;

export const NavigationWrapper = styled.nav`
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    opacity: 0;
    transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
`;

// export const Checkbox = styled.input`
//     display: none;

//     &:checked ~ ${NavBackground} {
//         transform: scale(80);
//     }

//     &:checked ~ ${NavigationWrapper} {
//         width: 100%;
//         opacity: 1;
//     }
// `;

// export const NavList = styled.ul`
//     ${position.centerHorizontalVertical}
//     width: 100%;
//     text-align: center;
//     list-style: none;
// `;

// export const NavItem = styled.li`
//     margin: 1rem;
// `;

// export const NavLink = styled.a`
//     position: relative;
//     z-index: 0;
//     color: ${({ theme }: ITheme): string => theme.colors.black};
//     font-size: 3rem;
//     font-weight: 300;
//     text-decoration: none;
//     text-transform: uppercase;

//     &::after {
//         content: '';
//         position: absolute;
//         z-index: -1;
//         left: -5%;
//         bottom: -15%;
//         width: 110%;
//         height: 0;
//         background: ${({ theme }: ITheme): string => theme.colors.primary};
//         transition: all 0.4s;
//     }

//     &:hover,
//     &:active {
//         &::after {
//             height: 140%;
//         }
//     }
// `;
