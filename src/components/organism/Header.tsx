import React from 'react';
import { BgVideContent, BgVideo, Wrapper } from './Header.styles';
import videoHeaderMp4 from '../../assets/video/CuttingWoodmp4.mp4';
import videoHeaderWebm from '../../assets/video/CuttingWoodWebm.webm';

export const Header = (): JSX.Element => {
    const noVideoInfo = 'Your browser does not support video';

    return (
        <Wrapper>
            <BgVideo>
                <BgVideContent autoPlay muted loop>
                    <source src={videoHeaderMp4} />
                    <source src={videoHeaderWebm} />
                    {noVideoInfo}
                </BgVideContent>
            </BgVideo>
        </Wrapper>
    );
};
