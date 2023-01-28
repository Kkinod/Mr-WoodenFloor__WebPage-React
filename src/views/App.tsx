import React from 'react';
import { HeaderWrapper } from 'components/organism/Header/Header';
import Navigation from 'components/molecules/Navigation/Navigation';


const App = (): JSX.Element => {
    return (
        <>
            <Navigation />
            <HeaderWrapper />
        </>
    );
};

export default App;
