import React from 'react';
import videoHeaderMp4 from 'assets/video/CuttingWoodmp4.mp4';
import videoHeaderWebm from 'assets/video/CuttingWoodWebm.webm';
import { BgVideo, BgVideoContent } from './BgVideo.styles';

export const BgVideoWrapper = (): JSX.Element => {
    const noVideoInfo = 'Your browser does not support video';

    return (
        <BgVideo>
            <BgVideoContent autoPlay muted loop>
                <source src={videoHeaderMp4} />
                <source src={videoHeaderWebm} />
                {noVideoInfo}
            </BgVideoContent>
        </BgVideo>
    );
};
