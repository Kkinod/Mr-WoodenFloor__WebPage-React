import { BurgerBars } from 'components/atoms/BurgerBars/BurgerBars.styles';
import CheckboxBurgerBars from 'components/atoms/CheckboxBurgerBars/CheckboxBurgerBars';
import LabelBurgerBars from 'components/atoms/LabelBurgerBars/LabelBurgerBars';
import React from 'react';

const BurgerBarsContainer = (): JSX.Element => {
    return (
        <>
            <CheckboxBurgerBars />
            <LabelBurgerBars>
                <BurgerBars />
            </LabelBurgerBars>
        </>
    );
};

export default BurgerBarsContainer;
