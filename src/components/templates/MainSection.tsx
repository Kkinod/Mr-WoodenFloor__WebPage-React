import React from 'react';
import { Main } from './MainSection.styles';
import SectionAbout from 'components/organism/SectionAbout/SectionAbout';
import SectionFeatures from 'components/organism/SectionFeatures/SectionFeatures';
import SectionOffers from 'components/organism/SectionOffers/SectionOffers';
import SectionReviews from 'components/organism/SectionReviews/SectionReviews';


const MainSection = ( ): JSX.Element => {
    return (
    <Main>
        <SectionAbout />
        <SectionFeatures />
        <SectionOffers />
        <SectionReviews />
    </Main>
    );
};

export default MainSection;
