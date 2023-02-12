import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import SectionOffersMain from 'components/molecules/SectionOffersMain/SectionOffersMain';
import React from 'react';
import { labels } from 'views/labels';
import { Section_Offers } from './SectionOffers.styles';

const SectionOffers = (): JSX.Element => {
    return (
        <Section_Offers id="section-offers">
            <CenterHeadingSecondary headingText={labels.sectionOffers.heading} />
            <SectionOffersMain></SectionOffersMain>
        </Section_Offers>
    );
};

export default SectionOffers;
