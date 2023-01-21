import { ITheme } from 'assets/styles/theme';
import { position } from 'assets/styles/mixins.styles';
import styled from 'styled-components/macro';

export const NavigationContainer = styled.div``;

export const BurgerBars = styled.div`
    position: relative;
    margin-top: 2rem;

    &,
    &::before,
    &::after {
        display: inline-block;
        width: 3rem;
        height: 2px;
        background-color: ${({ theme }: ITheme): string => theme.colors.greyDark3};
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        right: 0;
    }

    &::before {
        top: 1rem;
        width: 60%;
        transition: all 0.4s;
    }

    &::after {
        top: 2rem;
        width: 30%;
        transition: all 0.5s;
    }
`;

export const Label = styled.label`
    position: fixed;
    z-index: 1100;
    top: 6rem;
    right: 6rem;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: ${({ theme }: ITheme): string => theme.colors.primaryLight};
    text-align: center;
    box-shadow: 0 1rem 3rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.1);

    &:hover {
        ${BurgerBars}:after {
            width: 100%;
        }
        ${BurgerBars}:before {
            width: 100%;
        }
    }
`;

export const NavBackground = styled.div`
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

export const NavigationWrapper = styled.nav`
    position: fixed;
    z-index: 1050;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    opacity: 0;
    transition: all 1s cubic-bezier(0.68, -0.6, 0.32, 1.6);
`;

export const Checkbox = styled.input`
    display: none;

    &:checked ~ ${NavBackground} {
        transform: scale(80);
    }

    &:checked ~ ${NavigationWrapper} {
        width: 100%;
        opacity: 1;
    }
`;

export const NavList = styled.ul`
    ${position.centerHorizontalVertical}
    width: 100%;
    text-align: center;
    list-style: none;
`;

export const NavItem = styled.li`
    margin: 1rem;
`;

export const NavLink = styled.a`
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
