import React from 'react';
import { HeaderWrapper } from 'components/organism/Header/Header';
import Navigation from 'components/organism/Navigation/Navigation';
import MainSection from 'components/templates/MainSection';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <Navigation />
            <HeaderWrapper />
            <MainSection />
        </>
    );
};
