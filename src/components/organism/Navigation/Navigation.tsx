import React from 'react';
import { labels } from 'views/labels';
import ListItem from 'components/atoms/ListItem/ListItem';
import NavBackground from 'components/atoms/NavBackground/NavBackground';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import NavList from 'components/atoms/NavList/NavList';
import BurgerBarsContainer from 'components/molecules/BurgerBarsContainer/BurgerBarsContainer';
import { NavigationContainer, NavigationWrapper } from './Navigation.styles';

const Navigation = (): JSX.Element => {
    return (
        <NavigationContainer>
            <BurgerBarsContainer />
            <NavBackground />
            <NavigationWrapper>
                <NavList>
                    <ListItem>
                        <NavigationLink href="#section-about">{labels.navigationList.aboutUs}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">{labels.navigationList.cooperation}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">{labels.navigationList.selectedProjects}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">{labels.navigationList.customersOpinion}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink href="#section-about">{labels.navigationList.writeToUs}</NavigationLink>
                    </ListItem>
                </NavList>
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;
