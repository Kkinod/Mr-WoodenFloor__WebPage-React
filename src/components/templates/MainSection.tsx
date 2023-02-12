import React from 'react';
import { Main } from './MainSection.styles';
import SectionAbout from 'components/organism/SectionAbout/SectionAbout';
import SectionFeatures from 'components/organism/SectionFeatures/SectionFeatures';
import SectionOffers from 'components/organism/SectionOffers/SectionOffers';


const MainSection = ( ): JSX.Element => {
    return (
    <Main>
        <SectionAbout />
        <SectionFeatures />
        <SectionOffers />
    </Main>
    );
};

export default MainSection;
