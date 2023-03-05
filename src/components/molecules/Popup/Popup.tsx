import React from 'react';
import Bedroom from 'assets/img/room3-small.jpg';
import LivingRoom from 'assets/img/room4-small.jpg';
import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import { CloseIcon } from 'components/atoms/CloseIcon/CloseIcon.styles';
import { LeftBox, MainText, PopupContainer, PopupContent, PopupImg, RightBox, Subtitle, Title } from './Popup.styles';
import { labels } from 'views/labels';

const Popup = (): JSX.Element => {
    return (
        <PopupContainer id="popup">
            <PopupContent>
                <LeftBox>
                    <PopupImg src={Bedroom} alt="Bedroom" />
                    <PopupImg src={LivingRoom} alt="Empty living room" />
                </LeftBox>
                <RightBox>
                    <CloseIcon href="#section-projects">&times;</CloseIcon>
                    <Title>{labels.popup.title}</Title>
                    <Subtitle>{labels.popup.subtitle}</Subtitle>
                    <MainText>{labels.popup.mainText}</MainText>
                    <div>
                        <BtnText href="#">{labels.popup.btnText}</BtnText>
                    </div>
                </RightBox>
            </PopupContent>
        </PopupContainer>
    );
};

export default Popup;
