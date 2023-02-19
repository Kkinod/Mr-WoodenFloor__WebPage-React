import React from 'react';
import { CenterText } from 'components/atoms/CenterText/CenterText.styles';
import { HeadingSecondary } from 'components/atoms/Headings/Headings.styles';

interface ICenterHeadingSecondary {
    headingText: string;
}

const CenterHeadingSecondary: React.FC<ICenterHeadingSecondary> = ({ headingText }): JSX.Element => {
    return (
        <>
            <CenterText>
                <HeadingSecondary>{headingText}</HeadingSecondary>
            </CenterText>
        </>
    );
};

export default CenterHeadingSecondary;
