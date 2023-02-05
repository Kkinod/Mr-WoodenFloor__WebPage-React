import { ITheme } from 'assets/styles/theme';
import styled from 'styled-components/macro';

export const BtnText = styled.a`
    position: relative;

    &::after {
        content: '\u27F6';
        color: ${({ theme }: ITheme): string => theme.colors.primary};
        margin-left: 0.5rem;
    }

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 0;
        background-color: ${({ theme }: ITheme): string => theme.colors.primary};
        transition: all 0.2s;
    }

    &:link,
    &:visited {
        display: inline-block;
        padding: 3px;
        color: ${({ theme }: ITheme): string => theme.colors.black};
        border-bottom: 2px solid ${({ theme }: ITheme): string => theme.colors.primary};
        font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
        text-decoration: none;
        transition: all 0.3s;
    }

    &:hover {
        box-shadow: 0 1rem 2rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
        transform: translateY(-2px);

        &::after {
            color: ${({ theme }: ITheme): string => theme.colors.white};
        }

        &::before {
            height: 100%;
        }
    }

    &:active,
    &:focus {
        outline: none;
        box-shadow: 0 0.5rem 1rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
        transform: translateY(0);
    }
`;
