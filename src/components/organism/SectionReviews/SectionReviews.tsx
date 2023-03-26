import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgKid from 'assets/img/kid-small.jpg';
import imgMan from 'assets/img/on2-small.jpg';
import imgSmilingMan from 'assets/img/on1-small.jpg';
import imgSmilingWoman from 'assets/img/Woman2-small.jpg';
import CardCustomerReview from 'components/molecules/CardCustomerReview/CardCustomerReview';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import { labels } from 'views/labels';
import { ReviewsContainer, Section_Reviews, ShadowBg } from './SectionReviews.stylest';

const SectionReviews = (): JSX.Element => {
    const settings = {
        // dots: true,
        // centerMode: true,
        // centerPadding: "10px",

        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Section_Reviews id="section-reviews">
            <ShadowBg />
            <CenterHeadingSecondary headingText={labels.sectionReviews.heading} />
            <ReviewsContainer>
                <Slider {...settings}>
                    <CardCustomerReview
                        imgCustomer={imgKid}
                        customerName={labels.sectionReviews.customerName}
                        headingOfReview={labels.sectionReviews.headingOfReview}
                        reviewText={labels.sectionReviews.reviewText}
                    />
                    <CardCustomerReview
                        imgCustomer={imgMan}
                        customerName={labels.sectionReviews.customerName}
                        headingOfReview={labels.sectionReviews.headingOfReview}
                        reviewText={labels.sectionReviews.reviewText}
                    />
                    <CardCustomerReview
                        imgCustomer={imgSmilingMan}
                        customerName={labels.sectionReviews.customerName}
                        headingOfReview={labels.sectionReviews.headingOfReview}
                        reviewText={labels.sectionReviews.reviewText}
                    />
                    <CardCustomerReview
                        imgCustomer={imgSmilingWoman}
                        customerName={labels.sectionReviews.customerName}
                        headingOfReview={labels.sectionReviews.headingOfReview}
                        reviewText={labels.sectionReviews.reviewText}
                    />
                </Slider>
            </ReviewsContainer>
        </Section_Reviews>
    );
};

export default SectionReviews;
