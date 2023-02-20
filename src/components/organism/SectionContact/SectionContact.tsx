import React from 'react';
import { Row } from 'components/atoms/Grid/Grid.styles';
import { Section_Contact } from './SectionContact.styles';
import ContactContainer from 'components/molecules/ContactContainer/ContactContainer';
import ContactForm from 'components/molecules/ContactForm/ContactForm';
import { labels } from 'views/labels';
import ContactRadioContainer from 'components/molecules/ContactRadioContainer/ContactRadioContainer';
import ButtonFormGroup from 'components/molecules/ButtonFormGroup/ButtonFormGroup';

const SectionContact = (): JSX.Element => {
    return (
        <Section_Contact id="section-contact">
            <Row>
                <ContactContainer
                    headingText={labels.sectionContact.headingText}
                    formAction={labels.sectionContact.formAction}
                >
                    <ContactForm
                        placeholderText={labels.sectionContact.placeholderNameText}
                        inputId={labels.sectionContact.inputNameId}
                    />
                    <ContactForm
                        placeholderText={labels.sectionContact.placeholderEmailText}
                        inputId={labels.sectionContact.inputEmailId}
                    />
                    <ContactRadioContainer
                        firstLabelRadioText={labels.sectionContact.firstLabelRadioText}
                        secondLabelRadioText={labels.sectionContact.secondLabelRadioText}
                    />
                    <ButtonFormGroup />
                </ContactContainer>
            </Row>
        </Section_Contact>
    );
};

export default SectionContact;
