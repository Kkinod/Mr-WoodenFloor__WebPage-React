import React from 'react';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import { Section } from './SectionAbout.styles';
import { labels } from 'views/labels';

const SectionAbout = (): JSX.Element => {
    return (
        <Section id="section-about">
            <CenterHeadingSecondary headingText={labels.sectionAbout.heading}/>
        </Section>
    );
};

export default SectionAbout;
