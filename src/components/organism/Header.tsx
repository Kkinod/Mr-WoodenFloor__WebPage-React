import React from 'react';
import { BgVideContent, BgVideo, Wrapper } from './Header.styles';
import CuttingWoodmp4 from '../../assets/video/'
import {abc} from '../../assets/img/'

export const Header = (): JSX.Element => {
    return (
        <Wrapper>
            <BgVideo>
                <BgVideContent>
                    <source src={CuttingWoodmp4} />
                    <source src="./img/video/Cutting wood with a miter saw.webm" />
                    Twoja przeglądarka nie wspiera video!
                </BgVideContent>
            </BgVideo>
        </Wrapper>
    
    );
};
