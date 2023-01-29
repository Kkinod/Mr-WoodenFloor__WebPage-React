import ListItem from 'components/atoms/ListItem/ListItem';
import NavBackground from 'components/atoms/NavBackground/NavBackground';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import NavList from 'components/atoms/NavList/NavList';
import BurgerBarsContainer from 'components/molecules/BurgerBarsContainer/BurgerBarsContainer';
import React from 'react';
import { NavigationContainer, NavigationWrapper } from './Navigation.styles';

const Navigation = (): JSX.Element => {
    return (
        <NavigationContainer>
            <BurgerBarsContainer />
            <NavBackground />

            <NavigationWrapper>
                <NavList>
                    <ListItem>
                        <NavigationLink href="#section-about">O Nas</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">Współpraca</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">Wybrane Projekty</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">Opinie Klientów</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">Napisz do Nas</NavigationLink>
                    </ListItem>
                </NavList>
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;
