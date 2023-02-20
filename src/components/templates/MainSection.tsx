import React from 'react';
import { Main } from './MainSection.styles';
import SectionAbout from 'components/organism/SectionAbout/SectionAbout';
import SectionFeatures from 'components/organism/SectionFeatures/SectionFeatures';
import SectionOffers from 'components/organism/SectionOffers/SectionOffers';
import SectionReviews from 'components/organism/SectionReviews/SectionReviews';
import SectionContact from 'components/organism/SectionContact/SectionContact';

const MainSection = (): JSX.Element => {
    return (
        <Main>
            <SectionAbout />
            <SectionFeatures />
            <SectionOffers />
            <SectionReviews />
            <SectionContact />
        </Main>
    );
};

export default MainSection;
