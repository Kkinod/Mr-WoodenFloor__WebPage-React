import styled from 'styled-components/macro';
import { ITheme } from 'assets/styles/theme';
import { HeadingTertiary } from 'components/atoms/Headings/Headings.styles';
import { responsiveSize } from 'assets/styles/mixins.styles';

export const ReviewBox = styled.div`
    margin: 0 3.5rem;
`;

export const ReviewImg = styled.img`
    height: 100%;
    transform: scale(1.2);
    transition: all 0.5s;
`;

export const ReviewCaption = styled.figcaption`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 10%);
    color: ${({ theme }: ITheme): string => theme.colors.white};
    text-transform: uppercase;
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
    font-weight: 700;
    text-align: center;
    opacity: 0;
    transition: all 0.5s;
`;

export const ReviewCard = styled.div`
    max-width: 60rem;
    padding: 6rem;
    padding-left: 9rem;
    border-radius: 1rem;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.1);
    background-color: rgba(${({ theme }: ITheme): string => theme.colors.whiteRgb}, 0.8);
    font-size: ${({ theme }: ITheme): string => theme.fontSize.defaultFontSize};
    transform: skewX(-12deg);

    &:hover ${ReviewCaption} {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover ${ReviewImg} {
        transform: scale(1);
        filter: blur(3px) brightness(80%);
    }

    @media ${responsiveSize.phoneSmall} {
        width: 100%;
        padding: 4rem;
        padding-left: 7rem;
        transform: skewX(0);
    }

    @media ${responsiveSize.phone} {
        width: 100%;
        transform: skewX(0);
    }
`;

export const ReviewShape = styled.figure`
    position: relative;
    width: 15rem;
    height: 15rem;
    float: left;
    shape-outside: circle(50% at 50% 50%);
    transform: translateX(-3rem) skewX(12deg);
    clip-path: circle(50% at 50% 50%);

    @media ${responsiveSize.phone} {
        transform: translateX(-3rem) skewX(0);
    }
`;

export const ReviewBoxText = styled.div`
    transform: skewX(12deg);

    @media ${responsiveSize.phone} {
        transform: skewX(0);
    }
`;

export const ReviewHeading = styled(HeadingTertiary)`
    margin-bottom: 1.5rem;
`;

export const ReviewText = styled.p``;
