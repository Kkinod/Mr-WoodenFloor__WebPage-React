import { HeadingSecondary } from 'components/atoms/Headings/Headings.styles';
import React, { ReactNode } from 'react';
import { ContactBox, ContactBoxForm, Form, FormHeading } from './ContactContainer.styles';

interface IContactContainerProps {
    children: ReactNode;
    headingText: string;
}

const ContactContainer: React.FC<IContactContainerProps> = ({ children, headingText }): JSX.Element => {
    return (
        <ContactBox>
            <ContactBoxForm>
                <Form action="#">
                    <FormHeading>
                        <HeadingSecondary>{headingText}</HeadingSecondary>
                        {children}
                    </FormHeading>
                </Form>
            </ContactBoxForm>
        </ContactBox>
    );
};

export default ContactContainer;
