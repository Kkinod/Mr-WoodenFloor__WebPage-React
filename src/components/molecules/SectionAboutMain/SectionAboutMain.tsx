import React from 'react';
import firstPhoto from 'assets/img/1.jpg';
import secondPhoto from 'assets/img/2.jpg';
import thirdPhoto from 'assets/img/3.jpg';
import { Col1of2, Row } from 'components/atoms/Grid/Grid.styles';
import { WrapperComposition } from './SectionAboutMain.styles';
import { FirstPhoto, SecondPhoto, ThirdPhoto } from 'components/atoms/CompositionPhotos/CompositionPhotos.styles';

const SectionAboutMain = (): JSX.Element => {
    return (
        <Row>
            <Col1of2>
                <WrapperComposition>
                    <FirstPhoto alt="Wood floor 1" src={process.env.PUBLIC_URL + firstPhoto} />
                    <SecondPhoto src={process.env.PUBLIC_URL + secondPhoto} alt="Wood floor 2" />
                    <ThirdPhoto src={process.env.PUBLIC_URL + thirdPhoto} alt="Wood floor 3" />
                </WrapperComposition>
            </Col1of2>
        </Row>
    );
};

export default SectionAboutMain;
