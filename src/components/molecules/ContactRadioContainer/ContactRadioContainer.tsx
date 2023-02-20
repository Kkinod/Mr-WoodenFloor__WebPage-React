import React from 'react';
import { FormGroup } from 'components/atoms/FormGroup/FormGroup.styles';
import { FormRadioWrapper, InputRadio, LabelRadio, RadioButton } from './ContactRadioContainer.styles';

interface IContactRadioContainerProps {
    firstLabelRadioText: string;
    secondLabelRadioText: string;
}

const ContactRadioContainer: React.FC<IContactRadioContainerProps> = ({
    firstLabelRadioText,
    secondLabelRadioText,
}): JSX.Element => {
    return (
        <FormGroup>
            <FormRadioWrapper>
                <InputRadio type="radio" id="individual" name="who" />
                <LabelRadio htmlFor="individual">
                    <RadioButton></RadioButton>
                    {firstLabelRadioText}
                </LabelRadio>
            </FormRadioWrapper>
            <FormRadioWrapper>
                <InputRadio type="radio" id="business" name="who" />
                <LabelRadio htmlFor="business">
                    <RadioButton></RadioButton>
                    {secondLabelRadioText}
                </LabelRadio>
            </FormRadioWrapper>
        </FormGroup>
    );
};

export default ContactRadioContainer;
