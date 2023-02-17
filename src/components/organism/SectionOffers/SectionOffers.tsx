import React from 'react';
import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import { BtnWrapper, Section_Offers } from './SectionOffers.styles';
import { Row } from 'components/atoms/Grid/Grid.styles';
import CardProjects from 'components/molecules/CardProjects/CardProjects';
import CenterHeadingSecondary from 'components/molecules/CenterHeadingSecondary/CenterHeadingSecondary';
import CompanyHall from 'assets/img/Company-big.jpg';
import LivingRoom from 'assets/img/House-big.jpg';
import Workshop from 'assets/img/Builders-big.jpg';
import { labels } from 'views/labels';

const SectionOffers = (): JSX.Element => {
    return (
        <Section_Offers id="section-offers">
            <CenterHeadingSecondary headingText={labels.sectionOffers.heading} />
            <Row>
                <CardProjects
                    imageUrl={Workshop}
                    firstDescription={labels.sectionOffers.firtstCard.firstDescription}
                    secondDescription={labels.sectionOffers.firtstCard.secondDescription}
                    thirdDescription={labels.sectionOffers.firtstCard.thirdDescription}
                    fourthDescription={labels.sectionOffers.firtstCard.fourthDescription}
                    fifthDecription={labels.sectionOffers.firtstCard.fifthDecription}
                    buttonText={labels.sectionOffers.buttonCardText}
                />
                <CardProjects
                    imageUrl={LivingRoom}
                    firstDescription={labels.sectionOffers.firtstCard.firstDescription}
                    secondDescription={labels.sectionOffers.firtstCard.secondDescription}
                    thirdDescription={labels.sectionOffers.firtstCard.thirdDescription}
                    fourthDescription={labels.sectionOffers.firtstCard.fourthDescription}
                    fifthDecription={labels.sectionOffers.firtstCard.fifthDecription}
                    buttonText={labels.sectionOffers.buttonCardText}
                />
                <CardProjects
                    imageUrl={CompanyHall}
                    firstDescription={labels.sectionOffers.firtstCard.firstDescription}
                    secondDescription={labels.sectionOffers.firtstCard.secondDescription}
                    thirdDescription={labels.sectionOffers.firtstCard.thirdDescription}
                    fourthDescription={labels.sectionOffers.firtstCard.fourthDescription}
                    fifthDecription={labels.sectionOffers.firtstCard.fifthDecription}
                    buttonText={labels.sectionOffers.buttonCardText}
                />
            </Row>
            <BtnWrapper>
                <BtnText href="#">{labels.sectionOffers.buttonMainText}</BtnText>
            </BtnWrapper>
        </Section_Offers>
    );
};

export default SectionOffers;
