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
import { Section_Reviews, ShadowBg } from './SectionReviews.stylest';

const SectionReviews = (): JSX.Element => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
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
        </Section_Reviews>
    );
};

export default SectionReviews;
