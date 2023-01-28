import React from 'react';
import {
    Label,
    Checkbox,
    NavigationContainer,
    BurgerBars,
    NavBackground,
    NavigationWrapper,
    NavList,
    NavItem,
    NavLink,
} from './Navigation.styles';

const Navigation = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Checkbox type="checkbox" id="navi-toggle" />
            <Label htmlFor="navi-toggle">
                <BurgerBars>&nbsp;</BurgerBars>
            </Label>

            <NavBackground>&nbsp;</NavBackground>

            <NavigationWrapper>
                <NavList>
                    <NavItem><NavLink href="#section-about">O Nas</NavLink></NavItem>
                    <NavItem><NavLink>Współpraca</NavLink></NavItem>
                    <NavItem><NavLink>Wybrane Projekty</NavLink></NavItem>
                    <NavItem><NavLink>Opinie Klientów</NavLink></NavItem>
                    <NavItem><NavLink>Napisz do Nas</NavLink></NavItem>
                </NavList>
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;
