import styled from 'styled-components';
import { ITheme } from 'assets/styles/theme';
import { responsiveSize } from 'assets/styles/mixins.styles';

interface IDefaultPhotoProps {
    hovered: boolean;
}

export const DefaultPhoto = styled.img<IDefaultPhotoProps>`
    position: absolute;
    z-index: 10;
    width: 65%;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.4);
    transition: 0.5s;

    ${({ hovered }: IDefaultPhotoProps) =>
        hovered &&
        `
        z-index: 20;
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.5);

        @media ${responsiveSize.tabPort} {
            transform: scale(1.25) translateY(-0.5rem);
    }
    `}

    @media ${responsiveSize.tabPort} {
        position: relative;
        width: 33%;
    }
`;

export const FirstPhoto = styled(DefaultPhoto)`
    left: 0rem;
    top: -2rem;

    @media ${responsiveSize.tabPort} {
        top: 2rem;
        left: 5rem;
    }
`;

export const SecondPhoto = styled(DefaultPhoto)`
    right: 1rem;
    top: 2rem;

    @media ${responsiveSize.tabPort} {
        right: 0;
        top: -1rem;
    }
`;

export const ThirdPhoto = styled(DefaultPhoto)`
    left: 10%;
    top: 15rem;

    @media ${responsiveSize.tabPort} {
        left: -5rem;
        top: 2rem;
    }
`;
