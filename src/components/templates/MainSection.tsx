import React from 'react';
import { Main } from './MainSection.styles';
import SectionAbout from 'components/organism/SectionAbout/SectionAbout';
import SectionFeatures from 'components/organism/SectionFeatures/SectionFeatures';


const MainSection = ( ): JSX.Element => {
    return (
    <Main>
        <SectionAbout />
        <SectionFeatures />
    </Main>
    );
};

export default MainSection;
