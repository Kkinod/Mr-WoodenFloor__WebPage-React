import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import React from 'react';
import { BtnFormGroup } from './ButtonFormGroup.styles';

const ButtonFormGroup = (): JSX.Element => {
    return (
        <BtnFormGroup>
            <BtnText href="#">Do formularza</BtnText>
        </BtnFormGroup>
    );
};

export default ButtonFormGroup;
