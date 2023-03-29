import React, { useState } from 'react';
import { labels } from 'views/labels';
import ListItem from 'components/atoms/ListItem/ListItem';
import NavBackground from 'components/atoms/NavBackground/NavBackground';
import NavigationLink from 'components/atoms/NavigationLink/NavigationLink';
import NavList from 'components/atoms/NavList/NavList';
import BurgerBarsContainer from 'components/molecules/BurgerBarsContainer/BurgerBarsContainer';
import { NavigationContainer, NavigationWrapper } from './Navigation.styles';

const Navigation = (): JSX.Element => {
    const [isChecked, setIsChecked] = useState(false);
    const handleListItemClick = () => {
        setIsChecked(!isChecked);
      };

    return (
        <NavigationContainer>
            <BurgerBarsContainer checked={isChecked} setIsChecked={handleListItemClick}/>
            <NavBackground />
            <NavigationWrapper>
                <NavList>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href="#section-about">{labels.navigationList.aboutUs}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href="#section-features">{labels.navigationList.cooperation}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href="#section-offers">{labels.navigationList.selectedProjects}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href="#section-reviews">{labels.navigationList.customersOpinion}</NavigationLink>
                    </ListItem>
                    <ListItem>
                        <NavigationLink setIsChecked={handleListItemClick} href="#section-contact">{labels.navigationList.writeToUs}</NavigationLink>
                    </ListItem>
                </NavList>
            </NavigationWrapper>
        </NavigationContainer>
    );
};

export default Navigation;
