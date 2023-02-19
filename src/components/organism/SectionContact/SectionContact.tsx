import React from 'react';
import { Row } from 'components/atoms/Grid/Grid.styles';
import { Section_Contact } from './SectionContact.styles';
import {
    ContactBox,
    ContactBoxForm,
    Form,
    FormGroup,
    FormHeading,
    InputContact,
    LabelContact,
} from 'components/molecules/ContactBox/ContactBox.styles';
import { HeadingSecondary } from 'components/atoms/Headings/Headings.styles';

const SectionContact = (): JSX.Element => {
    return (
        <Section_Contact id="section-contact">
            <Row>
                <ContactBox>
                    <ContactBoxForm>
                        <Form action="#">
                            <FormHeading>
                                <HeadingSecondary>Napisz do nas</HeadingSecondary>
                            </FormHeading>

                            <FormGroup>
                                <InputContact type="text" placeholder="Full Name" id="name" required />
                                <LabelContact htmlFor="name">Full name</LabelContact>
                            </FormGroup>

                            <FormGroup>
                                <InputContact type="text" placeholder="Email adres" id="email" required />
                                <LabelContact htmlFor="email">Email adres</LabelContact>
                            </FormGroup>

                        </Form>
                    </ContactBoxForm>
                </ContactBox>
            </Row>
        </Section_Contact>
    );
};

export default SectionContact;
