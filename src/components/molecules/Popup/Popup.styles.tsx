import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

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
`;
