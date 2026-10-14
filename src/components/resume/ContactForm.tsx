'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from '@heroui/react';
import { CircleCheck, Send } from 'lucide-react';
import { FORMSPREE_ENDPOINT } from '@/lib/data/profile';

type FieldName = 'name' | 'email' | 'message';
type FormValues = Record<FieldName, string>;

interface ContactState {
  status: 'idle' | 'success' | 'error';
  message?: string;
  errors?: Partial<Record<FieldName, string>>;
  /** Echoed back so the fields keep their input when a send fails. */
  values?: FormValues;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: FormValues): ContactState['errors'] => {
  const errors: ContactState['errors'] = {};

  if (!values.name) errors.name = 'Please tell me your name.';
  if (!values.email) errors.email = 'An email lets me reply.';
  else if (!EMAIL_PATTERN.test(values.email))
    errors.email = "That email doesn't look quite right.";
  if (!values.message) errors.message = 'What would you like to talk about?';

  return errors;
};

const sendMessage = async (
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> => {
  const values: FormValues = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    message: String(formData.get('message') ?? '').trim(),
  };

  const errors = validate(values);

  if (errors && Object.keys(errors).length > 0) {
    return { status: 'error', errors, values };
  }

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(`Formspree responded with ${response.status}`);
    }

    return { status: 'success' };
  } catch (error) {
    console.error(error);

    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please try again.',
      values,
    };
  }
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" fullWidth isPending={pending}>
      {pending ? (
        'Sending…'
      ) : (
        <>
          <Send size={16} aria-hidden="true" />
          Send message
        </>
      )}
    </Button>
  );
};

interface FieldProps {
  name: FieldName;
  label: string;
  error?: string;
  defaultValue?: string;
  type?: 'text' | 'email';
  multiline?: boolean;
  placeholder: string;
  autoComplete?: string;
}

const Field = ({
  name,
  label,
  error,
  defaultValue,
  type = 'text',
  multiline = false,
  placeholder,
  autoComplete,
}: FieldProps) => {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    placeholder,
    defaultValue,
    required: true,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    'data-invalid': Boolean(error),
  };

  return (
    <div className="textfield textfield--full-width flex flex-col gap-1.5">
      <label htmlFor={id} className="label">
        {label}
      </label>
      {multiline ? (
        <textarea
          {...shared}
          rows={5}
          className="textarea textarea--full-width resize-y"
        />
      ) : (
        <input
          {...shared}
          type={type}
          autoComplete={autoComplete}
          className="input input--full-width"
        />
      )}
      <p id={errorId} className="field-error" data-visible={Boolean(error)}>
        {error}
      </p>
    </div>
  );
};

const ContactForm = () => {
  const [state, formAction] = useActionState(sendMessage, {
    status: 'idle',
  });

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          name="name"
          label="Name"
          placeholder="Your name"
          autoComplete="name"
          error={state.errors?.name}
          defaultValue={state.values?.name}
        />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          autoComplete="email"
          error={state.errors?.email}
          defaultValue={state.values?.email}
        />
      </div>
      <Field
        name="message"
        label="Message"
        multiline
        placeholder="Tell me about the role, team or product you're building."
        error={state.errors?.message}
        defaultValue={state.values?.message}
      />

      <SubmitButton />

      <div aria-live="polite">
        {state.status === 'success' && (
          <p className="flex items-center gap-2 rounded-2xl bg-success/10 px-4 py-3 text-sm font-medium text-success">
            <CircleCheck size={16} aria-hidden="true" />
            Thanks! Your message is on its way. I&apos;ll be in touch soon.
          </p>
        )}
        {state.message && (
          <p className="rounded-2xl bg-danger/10 px-4 py-3 text-sm font-medium text-danger">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
