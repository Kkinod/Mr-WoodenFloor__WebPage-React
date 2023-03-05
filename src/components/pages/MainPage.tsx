import React from 'react';
import { HeaderWrapper } from 'components/organism/Header/Header';
import Footer from 'components/organism/Footer/Footer';
import MainSection from 'components/templates/MainSection';
import Navigation from 'components/organism/Navigation/Navigation';
import Popup from 'components/molecules/Popup/Popup';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <Navigation />
            <HeaderWrapper />
            <MainSection />
            <Footer />
            <Popup />
        </>
    );
};
