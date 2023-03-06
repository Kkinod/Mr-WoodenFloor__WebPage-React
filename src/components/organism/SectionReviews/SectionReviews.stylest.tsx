import styled from 'styled-components/macro';
import { Section } from 'components/atoms/Section/Section.styles';
import { ITheme } from 'assets/styles/theme';
import imgReview from 'assets/img/bgi-reviews-big.jpg';

export const Section_Reviews = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15rem 0;
    background-image: url(${imgReview});
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    overflow: hidden;
`;

export const ShadowBg = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to bottom,
        rgba(${({ theme }: ITheme): string => theme.colors.blackRgb}, 0.9),
        transparent
    );
`;

export const ReviewsContainer = styled.div`
    width: 100vw;
`;
