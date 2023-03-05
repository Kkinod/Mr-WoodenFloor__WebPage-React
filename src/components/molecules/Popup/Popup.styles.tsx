import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const PopupContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    border-radius: 1rem;
    background-color: ${({ theme }: ITheme): string => theme.colors.white};
    box-shadow: 0 2rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.2);
    overflow: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25);
    transition: all 0.5s 0.2s;
`;

export const PopupContainer = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.8);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    &:target {
        opacity: 1;
        visibility: visible;
    }

    &:target ${PopupContent} {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;
