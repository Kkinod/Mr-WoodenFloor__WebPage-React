import { HeadingSecondary } from 'components/atoms/Headings/Headings.styles';
import React, { ReactNode } from 'react';
import { ContactBox, ContactBoxForm, Form, FormHeading } from './ContactContainer.styles';

interface IContactContainerProps {
    children: ReactNode;
    headingText: string;
    formAction: string;
}

const ContactContainer: React.FC<IContactContainerProps> = ({ children, headingText, formAction }): JSX.Element => {
    return (
        <ContactBox>
            <ContactBoxForm>
                <Form action={formAction}>
                    <FormHeading>
                        <HeadingSecondary>{headingText}</HeadingSecondary>
                    </FormHeading>
                    {children}
                </Form>
            </ContactBoxForm>
        </ContactBox>
    );
};

export default ContactContainer;
