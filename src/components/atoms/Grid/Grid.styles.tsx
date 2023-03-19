import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const Row = styled.div`
    display: flex;
    justify-content: center;
    max-width: ${({ theme }: ITheme): string => theme.grid.gridWidth};
    margin: 0 auto;

    @media ${responsiveSize.tabPort} {
        flex-direction: column;
        max-width: 50rem;
    }

    &:not(:last-child) {
        margin-bottom: ${({ theme }: ITheme): string => theme.grid.gutterVertical};

        @media ${responsiveSize.tabPort} {
            margin-bottom: ${({ theme }: ITheme): string => theme.grid.gutterVerticalSmall};
        }
    }
`;

const Col = styled.div`
    &:not(:last-child) {
        margin-right: ${({ theme }: ITheme): string => theme.grid.gutterHorizontal};

        @media ${responsiveSize.tabPort} {
            margin-right: 0;
            margin-bottom: ${({ theme }: ITheme): string => theme.grid.gutterVerticalSmall};
        }
    }

    @media ${responsiveSize.tabPort} {
        width: 100% !important;
    } ;
`;

export const Col1of2 = styled(Col)`
    width: calc((100% - ${({ theme }: ITheme): string => theme.grid.gutterVertical}) / 2);
`;

export const Col1of3 = styled(Col)`
    width: calc((100% - 2 * ${({ theme }: ITheme): string => theme.grid.gutterVertical}) / 3);
`;

export const Col1of4 = styled(Col)`
    width: calc((100% - 3 * ${({ theme }: ITheme): string => theme.grid.gutterVertical}) / 4);
`;

export const Col2of3 = styled(Col)`
    width: calc((100% - 2 * ${({ theme }: ITheme): string => theme.grid.gutterVertical}) / 3) +
        ${({ theme }: ITheme): string => theme.grid.gutterVertical};
`;

export const Col2of4 = styled(Col)`
    width: calc((100% - 2 * ${({ theme }: ITheme): string => theme.grid.gutterVertical}) / 4) +
        ${({ theme }: ITheme): string => theme.grid.gutterVertical};
`;

export const Col3of4 = styled(Col)`
    width: calc((100% - 3 * ${({ theme }: ITheme): string => theme.grid.gutterVertical}) / 4) +
        (2 * ${({ theme }: ITheme): string => theme.grid.gutterVertical});
`;
