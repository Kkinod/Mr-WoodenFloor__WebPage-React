import styled from 'styled-components';
import { animationMoveInLeft, animationMoveInRight } from 'assets/styles/animations.styles';

export const HeadingBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const HeadingPrimary = styled.h1`
    /* color:  */
`;

export const HeadingPrimaryMain = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    /* color:  */
    animation: ${animationMoveInLeft} 1s;
`;

export const HeadingPrimarySecond = styled.span`
    display: block;
    font-size: 4rem;
    font-weight: 400;
    text-transform: capitalize;
    animation: ${animationMoveInRight} 1s;
`;
