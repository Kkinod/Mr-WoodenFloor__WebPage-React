import React from 'react';
import { Label, Checkbox, NavigationContainer, BurgerBars } from './Navigation.styles';

const Navigation = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Checkbox type="checkbox" id="navi-toggle"></Checkbox>
            <Label htmlFor="navi-toggle">
                <BurgerBars />
            </Label>
        </NavigationContainer>
    );
};

export default Navigation;
