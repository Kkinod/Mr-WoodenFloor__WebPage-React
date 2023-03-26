import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const LabelContact = styled.label`
    display: block;
    margin-top: 0.7rem;
    margin-left: 2rem;
    font-size: 1.2rem;
    font-weight: 700;
    transition: all 0.3s;
`;

export const InputContact = styled.input`
    display: block;
    width: 90%;
    padding: 1.5rem 2rem;
    border: none;
    border-bottom: 3px solid transparent;
    border-radius: 2px;
    background-color: rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.8);
    color: inherit;
    font-family: inherit;
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
    transition: all 0.3s;

    &:focus {
        border-bottom: 3px solid ${({ theme }: ITheme): string => theme.colors.primary};
        box-shadow: 0 1rem 2rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.3);
        outline: none;
    }

    &:focus:invalid {
        border-bottom: 3px solid ${({ theme }: ITheme): string => theme.colors.secondaryDark};
    }

    &::-webkit-input-placeholder {
        color: ${({ theme }: ITheme): string => theme.colors.greyDark2};
    }

    &:placeholder-shown + ${LabelContact} {
        opacity: 1;
        visibility: hidden;
        transform: translateY(-4rem);
    }

    @media ${responsiveSize.phone} {
        width: 100%;
    }
`;
