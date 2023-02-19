import CardCustomerReview from 'components/molecules/CardCustomerReview/CardCustomerReview';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import React, { useEffect, useRef } from 'react';
import { labels } from 'views/labels';
import { ReviewsContainer, Section_Reviews, ShadowBg } from './SectionReviews.stylest';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SectionReviews = (): JSX.Element => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            $(sliderRef.current).slick({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
    }, [sliderRef]);

    return (
        <Section_Reviews id="section-reviews">
            <ShadowBg />
            <CenterHeadingSecondary headingText={labels.sectionReviews.heading} />
            <ReviewsContainer ref={sliderRef}>
                <CardCustomerReview />
                <CardCustomerReview />
            </ReviewsContainer>
        </Section_Reviews>
    );
};

export default SectionReviews;
