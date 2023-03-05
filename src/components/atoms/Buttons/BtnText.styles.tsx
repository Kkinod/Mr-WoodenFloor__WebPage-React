import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const BtnText = styled.a`
    position: relative;
    padding: 1rem 2.25rem;
    border-radius: 100px;
    border-top: 1px solid rgba(${({ theme }: ITheme): string => theme.colors.primaryLightRgb}, 0.25);
    border-bottom: 1px solid rgba(${({ theme }: ITheme): string => theme.colors.primaryLightRgb}, 0.25);
    background-color: ${({ theme }: ITheme): string => theme.colors.primary};
    overflow: hidden;

    &::after {
        content: '\u27F6';
        margin-left: 0.3rem;
        color: ${({ theme }: ITheme): string => theme.colors.primaryDark};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to left, rgba(${({ theme }: ITheme): string => theme.colors.primaryLightRgb}, 0.25), transparent);
        transform: skewX(45deg) translateX(0);
        transition: 0.5s;
    }

    &:link,
    &:visited {
        display: inline-block;
        color: ${({ theme }: ITheme): string => theme.colors.black};
        font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
        text-decoration: none;
        transition: all 0.3s;
    }

    &:hover {
        box-shadow: 0 1rem 2rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
        transform: translateY(-3px);

        &::after {
            color: ${({ theme }: ITheme): string => theme.colors.white};
        }

        &::before {
            transform: skewX(45deg) translateX(200%);
        }
    }

    &:active,
    &:focus {
        outline: none;
        box-shadow: 0 0.5rem 1rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
        transform: translateY(-1px);
    }
`;
