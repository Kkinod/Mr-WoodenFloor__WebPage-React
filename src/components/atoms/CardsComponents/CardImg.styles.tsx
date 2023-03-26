import styled from 'styled-components/macro';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    transition: 5s;
    object-fit: cover;
    transform-origin: center center;

    @media ${responsiveSize.tabPort800} {
        height: 40rem;
    }
`;