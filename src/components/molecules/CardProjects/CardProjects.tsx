import React from 'react';
import {
    BackSide,
    CardHeading,
    CardHeadingSpanFirst,
    CardWrapper,
    FrontSide,
    SideFrontPictureFirst,
} from './CardProjects.styles';

interface ICardProjectsProps {
    imageUrl: string;
}

const CardProjects = ({ imageUrl }: ICardProjectsProps): JSX.Element => {
    return (
        <CardWrapper>
            <FrontSide>
                <SideFrontPictureFirst imageUrl={imageUrl}></SideFrontPictureFirst>
                <CardHeading>
                    <CardHeadingSpanFirst>{'Sprawdź ofertę'}</CardHeadingSpanFirst>
                </CardHeading>
            </FrontSide>
            <BackSide />
        </CardWrapper>
    );
};

export default CardProjects;
