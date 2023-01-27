import { responsiveSize } from 'assets/styles/mixins.styles';
import styled from 'styled-components/macro';

export const LogoBox = styled.div`
    position: absolute;
    left: 4rem;
`;

export const LogoImg = styled.img`
    height: 30rem;

    @media ${responsiveSize.phone} { // <=600px
        height: 20rem;
    };
`;
