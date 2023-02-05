import React, { useState } from 'react';
import firstPhoto from 'assets/img/1.jpg';
import secondPhoto from 'assets/img/2.jpg';
import thirdPhoto from 'assets/img/3.jpg';
import { Col1of2, Row } from 'components/atoms/Grid/Grid.styles';
import { WrapperComposition } from './SectionAboutMain.styles';
import { FirstPhoto, SecondPhoto, ThirdPhoto } from 'components/atoms/CompositionPhotos/CompositionPhotos.styles';
import { HeadingTertiarySectionAbout } from 'components/atoms/HeadingTertiarySectionAbout/HeadingTertiarySectionAbout.styles';
import { labels } from 'views/labels';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph.styles';

const SectionAboutMain = (): JSX.Element => {
    const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

    return (
        <Row>
            <Col1of2>
                <WrapperComposition>
                    <FirstPhoto
                        src={process.env.PUBLIC_URL + firstPhoto}
                        alt="Wood floor 1"
                        onMouseEnter={(): void => setHoveredPhoto('first')}
                        hovered={hoveredPhoto === 'first'}
                    />
                    <SecondPhoto
                        src={process.env.PUBLIC_URL + secondPhoto}
                        alt="Wood floor 2"
                        onMouseEnter={(): void => setHoveredPhoto('second')}
                        hovered={hoveredPhoto === 'second'}
                    />
                    <ThirdPhoto
                        src={process.env.PUBLIC_URL + thirdPhoto}
                        alt="Wood floor 3"
                        onMouseEnter={(): void => setHoveredPhoto('third')}
                        hovered={hoveredPhoto === 'third'}
                    />
                </WrapperComposition>
            </Col1of2>
            <Col1of2>
                <HeadingTertiarySectionAbout>{labels.sectionAbout.headingTertiaryFirst}</HeadingTertiarySectionAbout>
                <Paragraph>{labels.sectionAbout.paragraph}</Paragraph>
                <HeadingTertiarySectionAbout>{labels.sectionAbout.headingTertiarySecond}</HeadingTertiarySectionAbout>
                <Paragraph>{labels.sectionAbout.paragraph}</Paragraph>
            </Col1of2>
        </Row>
    );
};

export default SectionAboutMain;
