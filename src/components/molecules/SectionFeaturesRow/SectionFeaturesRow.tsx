import React from 'react';
import { CardWithHover, Row1of2 } from './SectionFeaturesRow.styles';


import { ImgCard } from 'components/atoms/CardsComponents/CardImg.styles';
import { CardTextWrapper } from 'components/atoms/CardsComponents/CardTextWrapper.styles';

interface ISectionFeaturesRowProps {
    firstPhoto: {
        src: string;
        alt: string;
    };
    secondPhoto: {
        src: string;
        alt: string;
    };
    thirdPhoto: {
        src: string;
        alt: string;
    };
    fourthPhoto: {
        src: string;
        alt: string;
    };
}

const SectionFeaturesRow = ({
    firstPhoto,
    secondPhoto,
    thirdPhoto,
    fourthPhoto,
}: ISectionFeaturesRowProps): JSX.Element => {

    return (
        <Row1of2>
            <CardWithHover>
                <ImgCard src={firstPhoto.src} alt={firstPhoto.alt} />
                <CardTextWrapper>
                    
                </CardTextWrapper>
            </CardWithHover>
            <CardWithHover>
                <ImgCard src={secondPhoto.src} alt={secondPhoto.alt} />
            </CardWithHover>
        </Row1of2>
    );
};

export default SectionFeaturesRow;
