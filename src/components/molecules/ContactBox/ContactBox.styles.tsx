import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import contactImg from 'assets/img/contactUs-big.jpg';

export const ContactBox = styled.div`
    width: 100rem;
    height: 50rem;
    background-image: linear-gradient(
            105deg,
            rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.9) 0%,
            rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.9) 50%,
            transparent 50%
        ),
        url(${contactImg});
    background-position: center;
    background-size: 100%;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.4);
`;

export const ContactBoxForm = styled.div`
    width: 50%;
    padding: 6rem;
`;

export const Form = styled.form``;

export const FormHeading = styled.div`
    margin-bottom: 4rem;
`;

export const FormGroup = styled.div`
    &:not(:last-child) {
        margin-bottom: 2rem;
    }
`;

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
    background-color: rgba(var(--color-white-rgb), 0.8);
    color: ingherit;
    font-family: inherit;
    font-size: var(--default-font-size);
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
`;

