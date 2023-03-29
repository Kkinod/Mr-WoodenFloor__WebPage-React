import React from 'react';
import { Link } from './NavigationLink.styles';

interface INavigationLink {
    href: string;
    children: React.ReactNode;
    setIsChecked?: () => void;
}

const NavigationLink: React.FC<INavigationLink> = ({ children, href, setIsChecked }): JSX.Element => {
    return <Link onClick={setIsChecked} href={href}>{children}</Link>;
};

export default NavigationLink;
