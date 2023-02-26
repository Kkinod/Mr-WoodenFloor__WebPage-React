import React from 'react';
import { HeaderWrapper } from 'components/organism/Header/Header';
import Footer from 'components/organism/Footer/Footer';
import MainSection from 'components/templates/MainSection';
import Navigation from 'components/organism/Navigation/Navigation';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <Navigation />
            <HeaderWrapper />
            <MainSection />
            <Footer />
        </>
    );
};
