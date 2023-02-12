import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import { Col1of3 } from 'components/atoms/Grid/Grid.styles';
import React from 'react';
import {
    BackSide,
    BackSideDetails,
    CardHeading,
    CardHeadingSpanFirst,
    CardWrapper,
    FrontSide,
    Li,
    SideFrontPictureFirst,
    Ul,
} from './CardProjects.styles';

interface ICardProjectsProps {
    imageUrl: string;
    firstDescription: string;
    secondDescription: string;
    thirdDescription: string;
    fourthDescription: string;
    fifthDecription: string;
    buttonText: string;
}

const CardProjects = ({
    imageUrl,
    firstDescription,
    secondDescription,
    thirdDescription,
    fourthDescription,
    fifthDecription,
    buttonText,
}: ICardProjectsProps): JSX.Element => {
    return (
        <Col1of3>
            <CardWrapper>
                <FrontSide>
                    <SideFrontPictureFirst imageUrl={imageUrl}></SideFrontPictureFirst>
                    <CardHeading>
                        <CardHeadingSpanFirst>{'Sprawdź ofertę'}</CardHeadingSpanFirst>
                    </CardHeading>
                </FrontSide>
                <BackSide>
                    <BackSideDetails>
                        <Ul>
                            <Li>{firstDescription}</Li>
                            <Li>{secondDescription}</Li>
                            <Li>{thirdDescription}</Li>
                            <Li>{fourthDescription}</Li>
                            <Li>{fifthDecription}</Li>
                        </Ul>
                        <BtnText href="#popup">{buttonText}</BtnText>
                    </BackSideDetails>
                </BackSide>
            </CardWrapper>
        </Col1of3>
    );
};

export default CardProjects;
