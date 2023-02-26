import { BtnText } from 'components/atoms/Buttons/BtnText.styles';
import React from 'react';
import { BtnFormGroup } from './ButtonFormGroup.styles';

interface IButtonFormGroup {
    btnText: string;
    btnHref: string
}

const ButtonFormGroup = ({ btnText, btnHref }: IButtonFormGroup): JSX.Element => {
    return (
        <BtnFormGroup>
            <BtnText href={btnHref}>{btnText}</BtnText>
        </BtnFormGroup>
    );
};

export default ButtonFormGroup;