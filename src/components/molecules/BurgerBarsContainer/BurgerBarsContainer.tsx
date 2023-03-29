import React from 'react';
import { BurgerBars } from 'components/atoms/BurgerBars/BurgerBars.styles';
import LabelBurgerBars from 'components/atoms/LabelBurgerBars/LabelBurgerBars';
import { Checkbox } from 'components/atoms/CheckboxBurgerBars/CheckboxBurgerBars.styles';

interface IBurgerBarsContainer {
    checked: boolean;
    setIsChecked: () => void;
}

const BurgerBarsContainer = ({ checked, setIsChecked }: IBurgerBarsContainer): JSX.Element => {
    return (
        <>
            <Checkbox type="checkbox" id="navi-toggle" checked={checked} onChange={setIsChecked} />
            <LabelBurgerBars>
                <BurgerBars />
            </LabelBurgerBars>
        </>
    );
};

export default BurgerBarsContainer;
