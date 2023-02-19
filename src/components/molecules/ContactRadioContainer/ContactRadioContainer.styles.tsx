import { ITheme } from 'assets/styles/theme';
import styled from 'styled-components/macro';

export const FormRadioWrapper = styled.div`
    display: inline-block;
    width: 49%;
`;

export const RadioButton = styled.span`
    position: absolute;
    top: -0.4rem;
    left: 0;
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border: 5px solid ${({ theme }: ITheme): string => theme.colors.primary};
    border-radius: 50%;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
        background-color: ${({ theme }: ITheme): string => theme.colors.primary};
        transform: translate(-50%, -50%);
        transition: opacity 0.2s;
        opacity: 0;
    }
`;

export const LabelRadio = styled.label`
    position: relative;
    padding-left: 4.5rem;
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
    cursor: pointer;
`;

export const InputRadio = styled.input`
    display: none;

    &:checked ~ ${LabelRadio} ${RadioButton}::after {
        opacity: 1;
    }
`;
