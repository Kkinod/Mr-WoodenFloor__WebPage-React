import styled from 'styled-components/macro';
import footerBgImg from 'assets/img/bed-middle.jpg';
import { ITheme } from 'assets/styles/theme';

export const FooterSection = styled.footer`
    position: relative;
    z-index: 0;
    padding: 10rem 0;
    background-image: url(${footerBgImg});
    background-position: center;
    background-size: cover;
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
`;

export const FooterLogoBox = styled.div`
    margin-bottom: 8rem;
    text-align: center;
`;

export const FooterLogo = styled.img`
    width: 20rem;
    height: auto;
`;

export const FooterNavigation = styled.div`
    display: inline-block;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }: ITheme): string => theme.colors.primary};
`;

export const FooterList = styled.ul`
    list-style: none;
`;

export const FooterListItem = styled.li`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 1.5rem;
    }
`;

export const FooterListItemLink = styled.a`
    &:link,
    &:visited {
        display: inline-block;
        color: ${({ theme }: ITheme): string => theme.colors.white};
        text-decoration: none;
        text-transform: uppercase;
        transition: all 0.2s;
    }

    &:hover,
    &:active {
        box-shadow: 0 1rem 2rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.4);
        color: ${({ theme }: ITheme): string => theme.colors.primary};
        transform: rotate(5deg) scale(1.3);
    }
`;

export const FooterCopyright = styled.div`
    width: 80%;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }: ITheme): string => theme.colors.primary};
    color: ${({ theme }: ITheme): string => theme.colors.white};
    float: right;
`;
