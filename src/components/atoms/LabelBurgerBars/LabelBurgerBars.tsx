import React from 'react';
import { Label } from './LabelBurgerBars.styles';

interface ILabel {
    children: JSX.Element;
}

const LabelBurgerBars: React.FC<ILabel> = ({ children }): JSX.Element => {
    return <Label htmlFor="navi-toggle">{children}</Label>;
};

export default LabelBurgerBars;
