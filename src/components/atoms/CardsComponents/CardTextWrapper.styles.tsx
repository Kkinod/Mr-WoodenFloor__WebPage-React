import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const CardTextWrapper = styled.div`
    position: absolute;
    margin: 1rem;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.4);
        transition: all 1.5s;
    }
`;
