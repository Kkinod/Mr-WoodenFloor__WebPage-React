import React from 'react';
import { Row } from 'components/atoms/Grid/Grid.styles';
import { Section_Contact } from './SectionContact.styles';
import ContactContainer from 'components/molecules/ContactContainer/ContactContainer';
import ContactForm from 'components/molecules/ContactForm/ContactForm';
import { labels } from 'views/labels';

const SectionContact = (): JSX.Element => {
    return (
        <Section_Contact id="section-contact">
            <Row>
                <ContactContainer headingText={labels.sectionContact.headingText}>
                    <ContactForm
                        placeholderText={labels.sectionContact.placeholderNameText}
                        inputId={labels.sectionContact.inputNameId}
                    />
                </ContactContainer>
            </Row>
        </Section_Contact>
    );
};

export default SectionContact;
