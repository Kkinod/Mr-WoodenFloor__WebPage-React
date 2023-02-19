import styled from 'styled-components/macro';
import { Section } from 'components/atoms/Section/Section.styles';
import { ITheme } from 'assets/styles/theme';

export const Section_Contact = styled(Section)`
    padding: 15rem 0;
    background-color: ${({ theme }: ITheme): string => theme.colors.white};
`;
