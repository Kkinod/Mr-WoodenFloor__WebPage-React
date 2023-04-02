import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { HeadingSecondary, HeadingTertiary } from 'components/atoms/Headings/Headings.styles';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const PopupContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 75%;
    border-radius: 1rem;
    background-color: ${({ theme }: ITheme): string => theme.colors.white};
    box-shadow: 0 2rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.2);
    overflow: hidden;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.25);
    transition: all 0.5s 0.2s;

    @media ${responsiveSize.phone} {
      flex-direction: column;  
      height: 90%;
    }
`;

export const PopupContainer = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.8);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;

    &:target {
        opacity: 1;
        visibility: visible;
    }

    &:target ${PopupContent} {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
`;

export const LeftBox = styled.div`
    width: 33%;

    @media ${responsiveSize.phone} {
        width: 100%; 
        height: 55%;
    }

    @media ${responsiveSize.phoneSmall} {
        width: 100%; 
        height: 36%;
    }
`;

export const PopupImg = styled.img`
    display: block;
    width: 100%;
    height: 50%;

    @media ${responsiveSize.phone} {
        height: 50%;
    }
`;

export const RightBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 67%;
    padding: 3rem 5rem;

    @media ${responsiveSize.phone} {
        width: 100%; 
        margin: auto 0;
    }
`;

export const Title = styled(HeadingSecondary)`
    margin-bottom: 1.5rem;

    @media ${responsiveSize.phoneSmall} {
       font-size: 2rem;
    }
`;

export const Subtitle = styled(HeadingTertiary)`
    margin-bottom: 1.5rem;
`;

export const MainText = styled.p`
    margin-bottom: 4rem;
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
    column-count: 2;
    column-gap: 4rem;
    column-rule: 1px solid ${({ theme }: ITheme): string => theme.colors.primary};
    hyphens: auto;

    @media ${responsiveSize.phoneSmall320px} {
       font-size: 1.3rem;
    }
`;
