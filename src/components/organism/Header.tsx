import React from 'react';
import videoHeaderMp4 from 'assets/video/CuttingWoodmp4.mp4';
import videoHeaderWebm from 'assets/video/CuttingWoodWebm.webm';
import Logo from 'components/atoms/Logo/Logo';
import { Heading } from 'components/atoms/HeadingBox/Heading';
import { BgVideoContent, BgVideo, Header } from './Header.styles';

export const HeaderWrapper = (): JSX.Element => {
    const noVideoInfo = 'Your browser does not support video';

    return (
        <Header>
            <BgVideo>
                <BgVideoContent autoPlay muted loop>
                    <source src={videoHeaderMp4} />
                    <source src={videoHeaderWebm} />
                    {noVideoInfo}
                </BgVideoContent>
            </BgVideo>
            <Heading />
            <Logo />
        </Header>
    );
};
