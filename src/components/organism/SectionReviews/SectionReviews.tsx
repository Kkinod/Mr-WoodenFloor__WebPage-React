import CardCustomerReview from 'components/molecules/CardCustomerReview/CardCustomerReview';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import React, { useEffect, useRef } from 'react';
import { labels } from 'views/labels';
import { ReviewsContainer, Section_Reviews, ShadowBg } from './SectionReviews.stylest';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SectionReviews = (): JSX.Element => {
    return (
        <Section_Reviews id="section-reviews">
            <ShadowBg />
            <CenterHeadingSecondary headingText={labels.sectionReviews.heading} />
            <ReviewsContainer>
                <CardCustomerReview />
                <CardCustomerReview />
            </ReviewsContainer>
        </Section_Reviews>
    );
};

export default SectionReviews;
