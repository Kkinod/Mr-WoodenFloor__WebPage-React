import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const CloseIcon = styled.a`
    &:link,
    &:visited {
        position: absolute;
        top: 1rem;
        right: 2rem;
        display: inline-block;
        color: ${({ theme }: ITheme): string => theme.colors.greyDark};
        font-size: 3rem;
        text-decoration: none;
        transition: all 0.2s;

        @media ${responsiveSize.phone} {
            color: ${({ theme }: ITheme): string => theme.colors.white};
        }
    }

    &:hover {
        color: ${({ theme }: ITheme): string => theme.colors.primary};
    }
`;
