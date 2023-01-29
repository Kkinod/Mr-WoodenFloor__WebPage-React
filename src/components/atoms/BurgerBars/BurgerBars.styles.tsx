import { ITheme } from 'assets/styles/theme';
import styled from 'styled-components/macro';

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
