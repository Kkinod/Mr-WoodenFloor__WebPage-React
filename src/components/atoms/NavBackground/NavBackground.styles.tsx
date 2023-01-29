import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const NavBgc = styled.div`
    position: fixed;
    top: 6rem;
    right: 6rem;
    z-index: 1000;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-image: radial-gradient(
        ${({ theme }: ITheme): string => theme.colors.primaryLight},
        ${({ theme }: ITheme): string => theme.colors.primaryDark}
    );
    transition: transform 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
`;
