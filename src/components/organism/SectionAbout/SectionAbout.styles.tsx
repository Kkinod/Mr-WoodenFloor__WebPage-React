import { ITheme } from 'assets/styles/theme';
import styled from 'styled-components/macro';

export const Section = styled.section`
    padding: 15rem 0 25rem;
    background-color: ${({ theme }: ITheme): string => theme.colors.greyLight1};
`;
