import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const BtnCardPrimary = styled.a`
    z-index: 11;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
        text-decoration-color: ${({ theme }: ITheme): string => theme.colors.primary};
    }
`;

export const BtnCardSecondary = styled.a`
    z-index: 10;
    margin-top: 15px;
    color: ${({ theme }: ITheme): string => theme.colors.white};
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 4px;
    text-decoration: none;
    cursor: pointer;
`;
