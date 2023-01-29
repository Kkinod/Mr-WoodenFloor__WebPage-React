import React from 'react';
import { HeadingBox, HeadingPrimary, HeadingPrimaryMain, HeadingPrimarySecond } from './Heading.styles';

export const Heading = (): JSX.Element => {
    const headingPrimaryMainText = 'Mr. woodenfloor';
    const headingPrimarySecondText = 'Drewniane Podłogi to nasza pasja';

    return (
        <HeadingBox>
            <HeadingPrimary>
                <HeadingPrimaryMain>{headingPrimaryMainText}</HeadingPrimaryMain>
                <HeadingPrimarySecond>{headingPrimarySecondText}</HeadingPrimarySecond>
            </HeadingPrimary>
        </HeadingBox>
    );
};
