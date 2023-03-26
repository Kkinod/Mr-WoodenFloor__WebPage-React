import styled from 'styled-components/macro';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const Row1of2 = styled.div`
    display: flex;

    @media ${responsiveSize.tabPort800} {
        flex-direction: column;
    }
`;
