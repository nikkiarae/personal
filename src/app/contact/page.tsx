'use client';

import React, { FC, useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useForm } from '@formspree/react';
import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';
import {
  Button,
  Card,
  Form as HeroForm,
  Input,
  Label,
  Link,
  TextArea,
  TextField,
} from '@heroui/react';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: FC = () => {
  const [, handleSubmit] = useForm('mzzzyjry');
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(
    null,
  );

  const onSubmit = async (
    values: { name: string; email: string; message: string },
    { resetForm }: FormikHelpers<ContactFormValues>,
  ) => {
    try {
      await handleSubmit(values);
      setFormStatus('success');
      resetForm(); // Reset the form on successful submission
    } catch (error) {
      setFormStatus('error');
      console.error(error);
    }
  };

  return (
    <Page>
      <PageHeader
        heading={'Contact Me'}
        subHeading={'Looking to partner or work together? Reach out'}
      />
      <div className="flex justify-center pt-6">
        <Card className="w-full max-w-3xl">
          <Card.Header>
            <Card.Title>Let&apos;s Connect</Card.Title>
            <Card.Description>
              Share a few details about your project, team, or role and I will
              get back to you.
            </Card.Description>
          </Card.Header>

          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            validationSchema={ContactSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit: handleFormikSubmit,
            }) => (
              <HeroForm onSubmit={handleFormikSubmit}>
                <Card.Content>
                  <div className="flex flex-col gap-4">
                    <TextField name="name" type="text">
                      <Label>Name</Label>
                      <Input
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        variant="secondary"
                        aria-invalid={Boolean(touched.name && errors.name)}
                      />
                      {touched.name && errors.name && (
                        <p className="text-sm text-danger">{errors.name}</p>
                      )}
                    </TextField>

                    <TextField name="email" type="email">
                      <Label>Email</Label>
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="email@example.com"
                        variant="secondary"
                        aria-invalid={Boolean(touched.email && errors.email)}
                      />
                      {touched.email && errors.email && (
                        <p className="text-sm text-danger">{errors.email}</p>
                      )}
                    </TextField>

                    <TextField name="message">
                      <Label>Message</Label>
                      <TextArea
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell me what you are building and how I can help."
                        variant="secondary"
                        rows={5}
                        aria-invalid={Boolean(
                          touched.message && errors.message,
                        )}
                      />
                      {touched.message && errors.message && (
                        <p className="text-sm text-danger">{errors.message}</p>
                      )}
                    </TextField>
                  </div>
                </Card.Content>

                <Card.Footer className="mt-4 flex flex-col gap-2">
                  <Button className="w-full" type="submit" isDisabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  <Link className="text-center text-sm" href="/resume">
                    View resume
                  </Link>

                  {formStatus === 'success' && (
                    <p className="w-full rounded-md bg-success/10 px-3 py-2 text-sm text-success">
                      Your message has been sent successfully.
                    </p>
                  )}

                  {formStatus === 'error' && (
                    <p className="w-full rounded-md bg-danger/10 px-3 py-2 text-sm text-danger">
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </Card.Footer>
              </HeroForm>
            )}
          </Formik>
        </Card>
      </div>
    </Page>
  );
};

export default Contact;
