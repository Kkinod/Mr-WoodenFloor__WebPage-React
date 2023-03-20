import styled from 'styled-components/macro';
import { Section } from 'components/atoms/Section/Section.styles';
import { ITheme } from 'assets/styles/theme';
import { Row } from 'components/atoms/Grid/Grid.styles';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const Section_Contact = styled(Section)`
    padding: 15rem 0;
    background-color: ${({ theme }: ITheme): string => theme.colors.white};
`;

export const SectionContactRow = styled(Row)`

    @media ${responsiveSize.tabPort} {
        flex-direction: row;
        max-width: ${({ theme }: ITheme): string => theme.grid.gridWidth};
    }
`;
