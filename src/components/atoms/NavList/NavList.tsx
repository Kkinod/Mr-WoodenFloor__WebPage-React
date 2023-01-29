import React from 'react';
import { NavUl } from './NavList.styles';

interface INavList {
    children: React.ReactNode;
}

const NavList: React.FC<INavList> = ({ children }): JSX.Element => {
    return <NavUl>{children}</NavUl>;
};

export default NavList;
