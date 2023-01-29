import styled from 'styled-components/macro';
import BurgerBarsWrapper from 'components/atoms/BurgerBars/BurgerBars';

export const NavigationContainer = styled.div``;

export const BurgerBars = styled(BurgerBarsWrapper)``;

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
