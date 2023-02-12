import { ITheme } from 'assets/styles/theme';
import { HeadingQuaternary } from 'components/atoms/Headings/Headings.styles';
import styled from 'styled-components/macro';

export const Card = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 52rem;
    border-radius: 1rem;
    box-shadow: 0 1.5rem 4rem rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.15);
    backface-visibility: hidden;
    transition: all 0.8s ease;
    overflow: hidden;
`;

export const CardHeading = styled(HeadingQuaternary)`
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 75%;
    color: ${({ theme }: ITheme): string => theme.colors.white};
    text-transform: uppercase;
    text-align: right;
`;

const CardHeadingSpan = styled.span`
    padding: 0.8rem 1.5rem;
    box-decoration-break: clone;
`;

export const CardHeadingSpanFirst = styled(CardHeadingSpan)`
    background-image: linear-gradient(
        to right bottom,
        rgba(${({ theme }: ITheme): string => theme.colors.secondaryRgb}, 0.55),
        rgba(${({ theme }: ITheme): string => theme.colors.secondaryDarkRgb}, 0.9)
    );
`;

export const FrontSide = styled(Card)`
    background-color: ${({ theme }: ITheme): string => theme.colors.white};
`;

export const SideFrontPictureFirst = styled.div<{ imageUrl?: string }>`
    height: 100%;
    background-size: cover;
    background-blend-mode: screen;
    background-image: linear-gradient(
            to right bottom,
            ${({ theme }: ITheme): string => theme.colors.primaryLight},
            ${({ theme }: ITheme): string => theme.colors.primaryDark}
        ),
        url(${({ imageUrl }: { imageUrl?: string }): string | undefined => imageUrl});
`;

export const BackSide = styled(Card)`
    transform: rotateY(180deg);
    background-image: linear-gradient(
        to right bottom,
        ${({ theme }: ITheme): string => theme.colors.primaryLight},
        ${({ theme }: ITheme): string => theme.colors.primaryDark}
    );
`;

export const BackSideDetails = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    width: 90%;
`;

export const CardWrapper = styled.div`
    position: relative;
    height: 52rem;
    perspective: 150rem;

    &:hover ${FrontSide} {
        transform: rotateY(-180deg);
    }

    &:hover ${BackSide} {
        transform: rotateY(0);
    }
`;

export const Ul = styled.ul`
    width: 80%;
    margin: 0 auto;
    list-style: none;
`;

export const Li = styled.li`
    padding: 1rem;
    font-size: 1.5rem;
    text-align: center;

    &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }: ITheme): string => theme.colors.primary};
    }

    &:last-child {
        margin-bottom: 10rem;
    }
`;
