import CardCustomerReview from 'components/molecules/CardCustomerReview/CardCustomerReview';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import React, { useEffect, useRef } from 'react';
import { labels } from 'views/labels';
import { ReviewsContainer, Section_Reviews, ShadowBg } from './SectionReviews.stylest';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SectionReviews = (): JSX.Element => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
    };

    return (
        <Section_Reviews id="section-reviews">
            <ShadowBg />
            <CenterHeadingSecondary headingText={labels.sectionReviews.heading} />

            {/* <ReviewsContainer> */}
            <Slider {...settings}>
                <CardCustomerReview />
                <CardCustomerReview />
                <CardCustomerReview />
                <CardCustomerReview />
                <CardCustomerReview />
                <CardCustomerReview />
            </Slider>
            {/* </ReviewsContainer> */}
        </Section_Reviews>
    );
};

export default SectionReviews;
