import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { BgVideoWrapper } from 'components/atoms/BgVideo/BgVideo';
import { Header } from './Header.styles';
import { Heading } from 'components/atoms/HeadingBox/Heading';

export const HeaderWrapper = (): JSX.Element => {

    return (
        <Header>
            <BgVideoWrapper />
            <Heading />
            <Logo />
        </Header>
    );
};
