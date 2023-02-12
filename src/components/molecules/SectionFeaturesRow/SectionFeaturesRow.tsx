import React from 'react';
import { CardWithHover, SmallTitle, Title } from './SectionFeaturesRow.styles';

import { ImgCard } from 'components/atoms/CardsComponents/CardImg.styles';
import { CardTextWrapper } from 'components/atoms/CardsComponents/CardTextWrapper.styles';
import { BtnCardPrimary, BtnCardSecondary } from 'components/atoms/Buttons/BtnsCard.styles';

interface ISectionFeaturesRowProps {
    photo: {
        src: string;
        alt: string;
    };
    title: string;
    smallTitle: string;
    description: string;
}

const SectionFeaturesRow = ({ photo, title, smallTitle, description }: ISectionFeaturesRowProps): JSX.Element => {
    return (
        <CardWithHover>
            <ImgCard src={photo.src} alt={photo.alt} />
            <CardTextWrapper>
                <BtnCardPrimary>
                    <Title>
                        <SmallTitle>{smallTitle}</SmallTitle>
                        {title}
                    </Title>
                </BtnCardPrimary>
                <BtnCardSecondary>{description}</BtnCardSecondary>
            </CardTextWrapper>
        </CardWithHover>
    );
};

export default SectionFeaturesRow;
