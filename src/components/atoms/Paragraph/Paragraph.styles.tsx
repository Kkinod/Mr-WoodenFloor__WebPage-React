import { ITheme } from 'assets/styles/theme';
import styled from 'styled-components/macro';

export const Paragraph = styled.p`
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};

    &:not(:last-child) {
        margin-bottom: 3rem;
    }
`;
