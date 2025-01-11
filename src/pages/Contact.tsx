import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Stack,
  Typography,
  Container,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useForm } from "@formspree/react";
import { Page } from "@components/layouts";
import { PageHeader } from "@components/sections";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mzzzyjry");
  const [formStatus, setFormStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (values: { name: string; email: string; message: string }, { resetForm }: any) => {
    try {
      await handleSubmit(values);
      setFormStatus("success");
      resetForm(); // Reset the form on successful submission
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <Page>
      <PageHeader
        heading={"Contact Me"}
        subHeading={"Looking to partner or work together? Reach out"}
      />
      <Container maxWidth={"md"} sx={{ pt: 6 }}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Stack spacing={2}>
                <Field
                  as={TextField}
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  error={touched.message && !!errors.message}
                  helperText={touched.message && errors.message}
                />
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>

                {/* Alert Section */}
                {formStatus === "success" && (
                  <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    Your message has been sent successfully!
                  </Alert>
                )}
                {formStatus === "error" && (
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    Something went wrong. Please try again later.
                  </Alert>
                )}
              </Stack>
            </Form>
          )}
        </Formik>
      </Container>
    </Page>
  );
};

export default Contact;