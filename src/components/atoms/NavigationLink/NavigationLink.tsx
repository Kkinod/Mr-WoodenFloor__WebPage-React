import React from 'react';
import { Link } from './NavigationLink.styles';

interface INavigationLink {
    href: string;
    children: React.ReactNode;
}

const NavigationLink: React.FC<INavigationLink> = ({ children, href }): JSX.Element => {
    return <Link href={href}>{children}</Link>;
};

export default NavigationLink;
