import SectionFeaturesRow from 'components/molecules/SectionFeaturesRow/SectionFeaturesRow';
import React from 'react';
import { Row1of2, Section } from './SectionFeatures.styles';
import LivingRoom from 'assets/img/House-big.jpg';
import Stairs from 'assets/img/Stairs-big.jpg';
import { labels } from 'views/labels';

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
        </Section>
    );
};

export default SectionFeatures;
