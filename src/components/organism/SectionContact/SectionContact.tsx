import React from 'react';
import { SectionContactRow, Section_Contact } from './SectionContact.styles';
import ContactContainer from 'components/molecules/ContactContainer/ContactContainer';
import ContactForm from 'components/molecules/ContactForm/ContactForm';
import { labels } from 'views/labels';
import ContactRadioContainer from 'components/molecules/ContactRadioContainer/ContactRadioContainer';
import ButtonFormGroup from 'components/molecules/ButtonFormGroup/ButtonFormGroup';

const SectionContact = (): JSX.Element => {
    return (
        <Section_Contact id="section-contact">
            <SectionContactRow>
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
                    <ButtonFormGroup btnText={labels.sectionContact.btnFormText} btnHref={labels.sectionContact.btnHref} />
                </ContactContainer>
            </SectionContactRow>
        </Section_Contact>
    );
};

export default SectionContact;
