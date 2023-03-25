import styled from 'styled-components/macro';
import { Section } from 'components/atoms/Section/Section.styles';
import { ITheme } from 'assets/styles/theme';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const Section_Offers = styled(Section)`
    padding: 10rem 0;
    background-color: ${({ theme }: ITheme): string => theme.colors.greyLight1};
`;

export const BtnWrapper = styled.div`
    text-align: center;
    margin-bottom: 18rem;

    @media ${responsiveSize.tabPort} {
        margin-bottom: 0;
    }
`;
