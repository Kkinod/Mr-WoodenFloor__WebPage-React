import React from 'react';
import { ReviewBox, ReviewCaption, ReviewCard, ReviewImg, ReviewShape, ReviewBoxText, ReviewHeading, ReviewText } from './CardCustomerReview.styles';
import imgKid from 'assets/img/kid-small.jpg'

const CardCustomerReview = (): JSX.Element => {
    return (
        <ReviewBox>
            <ReviewCard>
                <ReviewShape>
                    <ReviewImg src={imgKid} alt="Smiling kid"/>
                    <ReviewCaption>Jon Doe</ReviewCaption>
                </ReviewShape>
                <ReviewBoxText>
                    <ReviewHeading>Zakochałam się w schodach które zrobili w moim domu</ReviewHeading>
                    <ReviewText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, possimus vitae! Velit totam quo iure.</ReviewText>
                </ReviewBoxText>
            </ReviewCard>
        </ReviewBox>
    );
};

export default CardCustomerReview;
