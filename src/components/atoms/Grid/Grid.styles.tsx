import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const Row = styled.div`
    display: flex;
    justify-content: center;
    max-width: ${({ theme }: ITheme): string => theme.grid.gridWidth};
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: ${({ theme }: ITheme): string => theme.grid.gutterVertical};
    }
`;

const Col = styled.div`
    &:not(:last-child) {
        margin-right: ${({ theme }: ITheme): string => theme.grid.gutterHorizontal};
    }
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
