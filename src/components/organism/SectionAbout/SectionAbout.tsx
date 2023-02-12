import React from 'react';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import { Section_About } from './SectionAbout.styles';
import { labels } from 'views/labels';
import SectionAboutMain from 'components/molecules/SectionAboutMain/SectionAboutMain';

const SectionAbout = (): JSX.Element => {
    return (
        <Section_About id="section-about">
            <CenterHeadingSecondary headingText={labels.sectionAbout.heading}/>
            <SectionAboutMain />
        </Section_About>
    );
};

export default SectionAbout;
