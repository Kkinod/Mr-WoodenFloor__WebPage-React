import React from 'react';
import SectionFeaturesRow from 'components/molecules/SectionFeaturesRow/SectionFeaturesRow';
import { Row1of2 } from './SectionFeatures.styles';
import LivingRoom from 'assets/img/House-big.jpg';
import Stairs from 'assets/img/Stairs-big.jpg';
import CompanyHall from 'assets/img/Company-big.jpg';
import Workshop from 'assets/img/Builders-big.jpg';
import { labels } from 'views/labels';
import { Section } from 'components/atoms/Section/Section.styles';

const SectionFeatures = (): JSX.Element => {
    return (
        <Section id="section-features">
            <Row1of2>
                <SectionFeaturesRow
                    photo={{
                        src: LivingRoom,
                        alt: 'Living Room',
                    }}
                    title={labels.sectionFeatures.firstTitle}
                    smallTitle={labels.sectionFeatures.firstSmallTitle}
                    description={labels.sectionFeatures.firstDescription}
                />
                <SectionFeaturesRow
                    photo={{
                        src: Stairs,
                        alt: 'Stairs',
                    }}
                    title={labels.sectionFeatures.secondTitle}
                    smallTitle={labels.sectionFeatures.secondSmallTitle}
                    description={labels.sectionFeatures.secondDescription}
                />
            </Row1of2>
            <Row1of2>
                <SectionFeaturesRow
                    photo={{
                        src: CompanyHall,
                        alt: 'Company Hall',
                    }}
                    title={labels.sectionFeatures.thirdTitle}
                    smallTitle={labels.sectionFeatures.thirdSmallTitle}
                    description={labels.sectionFeatures.thirdDescription}
                />
                <SectionFeaturesRow
                    photo={{
                        src: Workshop,
                        alt: 'Workshop',
                    }}
                    title={labels.sectionFeatures.fourthTitle}
                    smallTitle={labels.sectionFeatures.fourthSmallTitle}
                    description={labels.sectionFeatures.fourthDescription}
                />
            </Row1of2>
        </Section>
    );
};

export default SectionFeatures;
