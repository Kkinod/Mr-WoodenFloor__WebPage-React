import { responsiveSize } from 'assets/styles/mixins.styles';
import styled from 'styled-components/macro';

export const NavigationContainer = styled.div``;

export const NavigationWrapper = styled.nav`
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0rem;
    width: 30%;
    height: 100vh;
    visibility: hidden;
    transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    @media ${responsiveSize.tabPort800} {
        width: 40%;
    }
`;

