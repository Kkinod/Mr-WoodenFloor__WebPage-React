import SectionFeaturesRow from 'components/molecules/SectionFeaturesRow/SectionFeaturesRow';
import React from 'react';
import { Section } from './SectionFeatures.styles';
import LivingRoom from 'assets/img/House-big.jpg';
import Stairs from 'assets/img/Stairs-big.jpg';

const SectionFeatures = (): JSX.Element => {
    return (
        <Section id="section-features">
            <SectionFeaturesRow
                firstPhoto={{
                    src: LivingRoom,
                    alt: 'Living Room',
                }}
                secondPhoto={{
                    src: Stairs,
                    alt: 'Stairs',
                }}
                thirdPhoto={{
                    src: '',
                    alt: '',
                }}
                fourthPhoto={{
                    src: '',
                    alt: '',
                }}
            ></SectionFeaturesRow>
        </Section>
    );
};

export default SectionFeatures;
