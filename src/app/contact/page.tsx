'use client';

import React, { FC, useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useForm } from '@formspree/react';
import { Page } from '@/components/layout';
import { PageHeader } from '@/components/sections';

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

const inputClassName =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300';

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
      <div className="mx-auto max-w-3xl pt-6">
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          validationSchema={ContactSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className={inputClassName}
                />
                {touched.name && errors.name && (
                  <p className="text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={inputClassName}
                />
                {touched.email && errors.email && (
                  <p className="text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={4}
                  className={`${inputClassName} min-h-28 resize-y`}
                />
                {touched.message && errors.message && (
                  <p className="text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Send Message
              </button>

              {formStatus === 'success' && (
                <div className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-900">
                  <p className="font-semibold">Success</p>
                  <p className="text-sm">
                    Your message has been sent successfully!
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-red-900">
                  <p className="font-semibold">Error</p>
                  <p className="text-sm">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </Page>
  );
};

export default Contact;
