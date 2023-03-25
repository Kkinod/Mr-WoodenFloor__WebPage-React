import { responsiveSize } from 'assets/styles/mixins.styles';
import styled from 'styled-components/macro';

export const CenterText = styled.div`
    text-align: center;
    margin-bottom: 15rem;

  @media ${responsiveSize.tabPort} {
        margin-bottom: 5rem;
    }
`;
