import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const DefaultPhoto = styled.img`
    /* position: absolute; */
    z-index: 10;
    width: 65%;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.4);
    transition: 0.5s;

    &:hover {
        z-index: 20;
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.5);
    }
`;

export const FirstPhoto = styled(DefaultPhoto)`
    left: 0rem;
    top: -2rem;

    &:hover {
        transform: scale(1.5);
    }
`;

export const SecondPhoto = styled(DefaultPhoto)`
    right: 1rem;
    top: 2rem;
`;

export const ThirdPhoto = styled(DefaultPhoto)`
    left: 10%;
    top: 15rem;
`;
