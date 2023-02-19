import React from 'react';
import {
    ReviewBox,
    ReviewCaption,
    ReviewCard,
    ReviewImg,
    ReviewShape,
    ReviewBoxText,
    ReviewHeading,
    ReviewText,
} from './CardCustomerReview.styles';

interface ICardCustomerReviewProps {
    imgCustomer: string;
    customerName: string;
    headingOfReview: string;
    reviewText: string;
}

const CardCustomerReview: React.FC<ICardCustomerReviewProps> = ({
    imgCustomer,
    customerName,
    headingOfReview,
    reviewText,
}): JSX.Element => {
    return (
        <ReviewBox>
            <ReviewCard>
                <ReviewShape>
                    <ReviewImg src={imgCustomer} alt="Customer photo" />
                    <ReviewCaption>{customerName}</ReviewCaption>
                </ReviewShape>
                <ReviewBoxText>
                    <ReviewHeading>{headingOfReview}</ReviewHeading>
                    <ReviewText>{reviewText}</ReviewText>
                </ReviewBoxText>
            </ReviewCard>
        </ReviewBox>
    );
};

export default CardCustomerReview;
