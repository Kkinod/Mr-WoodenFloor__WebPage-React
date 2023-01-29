import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { BurgerBars } from '../BurgerBars/BurgerBars.styles';

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
