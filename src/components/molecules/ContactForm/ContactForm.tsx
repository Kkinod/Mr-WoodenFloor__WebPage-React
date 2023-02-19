import React from 'react';
import { FormGroup, InputContact, LabelContact } from './ContactForm.styles';

interface IContactForm {
    placeholderText: string;
    inputId: string;
}

const ContactForm: React.FC<IContactForm> = ({ placeholderText, inputId }): JSX.Element => {
    return (
        <FormGroup>
            <InputContact type="text" placeholder={placeholderText} id={inputId} required />
            <LabelContact htmlFor={inputId}>{placeholderText}</LabelContact>
        </FormGroup>
    );
};

export default ContactForm;
