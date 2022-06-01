import { useFormik } from 'formik';
import React from 'react';
import {
  BtnStyled,
  ErrorStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './styled';
import { validationSchema } from '../../Validations/UserValidation';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = values => {
  console.log(values);
};

/* const validate = values => {
  // values.name values.email values.channel
  // errors.name errors.email errors.channel
  // errors.name = 'This field is required'
  let errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }
  return errors;
}; */

export const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  console.log(formik.errors);

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <LabelStyled htmlFor="name">Name</LabelStyled>
      <InputStyled
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.errors.name && formik.touched.name ? (
        <ErrorStyled>{formik.errors.name}</ErrorStyled>
      ) : null}

      <LabelStyled htmlFor="email">Email</LabelStyled>
      <InputStyled
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? (
        <ErrorStyled>{formik.errors.email}</ErrorStyled>
      ) : null}

      <LabelStyled htmlFor="channel">Channel</LabelStyled>
      <InputStyled
        type="text"
        id="channel"
        name="channel"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.channel}
      />
      {formik.errors.channel && formik.touched.channel ? (
        <ErrorStyled>{formik.errors.channel}</ErrorStyled>
      ) : null}

      <BtnStyled type="submit">SUBMIT</BtnStyled>
    </FormStyled>
  );
};
