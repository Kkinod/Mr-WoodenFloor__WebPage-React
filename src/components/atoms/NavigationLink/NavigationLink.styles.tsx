import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const Link = styled.a`
    position: relative;
    z-index: 0;
    color: ${({ theme }: ITheme): string => theme.colors.black};
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;

    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        left: -5%;
        bottom: -15%;
        width: 110%;
        height: 0;
        background: ${({ theme }: ITheme): string => theme.colors.primary};
        transition: all 0.4s;
    }

    &:hover,
    &:active {
        &::after {
            height: 140%;
        }
    }
`;
