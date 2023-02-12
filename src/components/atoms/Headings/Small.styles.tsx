import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';

export const Small = styled.small`
    color: ${({ theme }: ITheme): string => theme.colors.primary};
    font-size: 1.75rem;
    font-weight: 900;
`;
