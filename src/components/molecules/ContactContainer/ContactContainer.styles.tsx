import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import contactImg from 'assets/img/contactUs-big.jpg';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const ContactBox = styled.div`
    width: 100rem;
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

    @media ${responsiveSize.tabPort800} {
        background-image: linear-gradient(
                105deg,
                rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.9) 0%,
                rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.9) 70%,
                transparent 70%
            ),
            url(${contactImg});
        background-size: cover;
    }

    @media ${responsiveSize.phone} {
        background-image: linear-gradient(
                to right,
                rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.9) 0%,
                rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.9) 100%
            ),
            url(${contactImg});
    }
`;

export const ContactBoxForm = styled.div`
    width: 50%;
    padding: 6rem;

    @media ${responsiveSize.tabPort800} {
        width: 70%;
    }

    @media ${responsiveSize.phone} {
        width: 100%;
    }
`;

export const FormHeading = styled.div`
    margin-bottom: 4rem;
`;

export const Form = styled.form``;
