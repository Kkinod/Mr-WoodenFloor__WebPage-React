import React from 'react';
import Bedroom from 'assets/img/room3-small.jpg';
import LivingRoom from 'assets/img/room4-small.jpg';
import {
    CloseIcon,
    LeftBox,
    MainText,
    PopupContainer,
    PopupContent,
    PopupImg,
    RightBox,
    Subtitle,
    Title,
} from './Popup.styles';
import { BtnText } from 'components/atoms/Buttons/BtnText.styles';

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
                    <Title>Rozpocznij budowę z Nami</Title>
                    <Subtitle>Ważne &ndash; Zapraszamy do zapoznania się z Naszą ofertą</Subtitle>
                    <MainText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis suscipit maxime
                        repellat possimus obcaecati magnam ex cumque, excepturi iste? Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Doloribus, qui. Quibusdam quam, labore tempore eos nulla saepe
                        soluta nemo iure!
                    </MainText>
                    <div>
                        <BtnText href="#">Zarezerwuj termin</BtnText>
                    </div>
                </RightBox>
            </PopupContent>
        </PopupContainer>
    );
};

export default Popup;
