import React from 'react';
import { FormGroup } from 'components/atoms/FormGroup/FormGroup.styles';
import { FormRadioWrapper, InputRadio, LabelRadio, RadioButton } from './ContactRadioContainer.styles';

const ContactRadioContainer = (): JSX.Element => {
    return (
        <FormGroup>
            <FormRadioWrapper>
                <InputRadio type="radio" id="individual" name="who"/>
                <LabelRadio htmlFor="individual">
                    <RadioButton></RadioButton>
                    Klient indywidualny
                </LabelRadio>
            </FormRadioWrapper>
            <FormRadioWrapper>
                <InputRadio type="radio" id="business" name="who"/>
                <LabelRadio htmlFor="business">
                    <RadioButton></RadioButton>
                    Klient indywidualny
                </LabelRadio>
            </FormRadioWrapper>
        </FormGroup>
    );
};

export default ContactRadioContainer;
