import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const HeadingSecondary = styled.h2`
    position: relative;
    z-index: 1;
    display: inline-block;
    background-image: linear-gradient(
        to bottom right,
        ${({ theme }: ITheme): string => theme.colors.primary},
        ${({ theme }: ITheme): string => theme.colors.secondary}
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: all 0.2s;

    @media ${responsiveSize.tabPort} {
        font-size: 3rem;
    }

    @media ${responsiveSize.phone} {
        font-size: 2.5rem;
    }

    &:hover {
        transform: scale(1.1);
        text-shadow: 0.5rem 1rem 2rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
    }
`;

export const HeadingTertiary = styled.h3`
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
    font-weight: 700;
    text-transform: uppercase;
`;
