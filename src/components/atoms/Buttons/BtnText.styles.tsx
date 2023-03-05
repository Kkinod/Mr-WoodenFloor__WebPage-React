import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const BtnText = styled.a`
    position: relative;
    background-color: ${({ theme }: ITheme): string => theme.colors.primary};
    padding: 1rem 2.25rem;
    border-radius: 100px;
    overflow: hidden;
    border-top: 1px solid rgba(${({ theme }: ITheme): string => theme.colors.primaryLightRgb}, 0.25);
    border-bottom: 1px solid rgba(${({ theme }: ITheme): string => theme.colors.primaryLightRgb}, 0.25);
/* 
    display: flex;
    justify-content: center;
    align-items: center; */

    &::after {
        content: '\u27F6';
        color: ${({ theme }: ITheme): string => theme.colors.primaryDark};
        margin-left: 0.3rem;
    }

    /* &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 0;
        background-color: ${({ theme }: ITheme): string => theme.colors.primary};
        transition: all 0.5s;
    } */

    &::before {
        content: '';
        position: absolute;
        z-index: 1000000;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: linear-gradient(to left, rgba(${({ theme }: ITheme): string => theme.colors.primaryLightRgb}, 0.25), transparent);
        transform: skewX(45deg) translateX(0);
        transition: 0.5s;
        /* background: linear-gradient(to left, rgba(255,255,255, 0.15), transparent) */
    }

    &:link,
    &:visited {
        display: inline-block;
        /* padding: 3px; */
        color: ${({ theme }: ITheme): string => theme.colors.black};
        /* border-bottom: 2px solid ${({ theme }: ITheme): string => theme.colors.primary}; */
        font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
        text-decoration: none;
        transition: all 0.3s;
    }

    &:hover {
        box-shadow: 0 1rem 2rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
        transform: translateY(-3px);
        /* letter-spacing: 3px; */

        &::after {
            color: ${({ theme }: ITheme): string => theme.colors.white};
        }

        &::before {
            /* height: 100%; */
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
