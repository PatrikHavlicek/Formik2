import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from 'formik';
import React from 'react';
import {
  BtnStyled,
  ErrorStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './styled';
import { validationSchema } from '../../Validations/UserValidation';
import '../../styles.css';
import { TextError } from '../TextError.js/TextError';
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers: ['', ''],
  phNumbers: [''],
};

const onSubmit = values => {
  console.log(values);
};

const validateComments = value => {
  let error;
  if (!value) {
    error = 'Required';
  }
  return error;
};

export const YoutubeForm = () => {
  const { t } = useTranslation('common');
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount={true}
    >
      {formik => {
        console.log(formik);
        return (
          <section className="formSection">
            <Form className="formWrapper">
              <LabelStyled htmlFor="name">{t('form.name')}</LabelStyled>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component={TextError} />

              <LabelStyled htmlFor="email">{t('form.email')}</LabelStyled>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email">
                {errorMsg => <TextError>{errorMsg}</TextError>}
              </ErrorMessage>

              <LabelStyled htmlFor="channel">{t('form.channel')}</LabelStyled>
              <Field
                type="text"
                id="channel"
                name="channel"
                placeholder="Enter channel name"
              />
              <ErrorMessage name="channel" component={TextError} />

              <LabelStyled htmlFor="comments">{t('form.comment')}</LabelStyled>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                validate={validateComments}
              />
              <ErrorMessage name="comments" component={TextError} />

              <LabelStyled htmlFor="address">Address</LabelStyled>
              <FastField name="address">
                {props => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error ? (
                        <TextError>{meta.error}</TextError>
                      ) : null}
                    </div>
                  );
                }}
              </FastField>

              <LabelStyled htmlFor="facebook">Facebook profile</LabelStyled>
              <Field type="text" id="facebook" name="social.facebook"></Field>

              <LabelStyled htmlFor="twitter">Twitter profile</LabelStyled>
              <Field type="text" id="twitter" name="social.twitter"></Field>

              <LabelStyled htmlFor="primaryPh">
                Primary phone number
              </LabelStyled>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]"></Field>

              <LabelStyled htmlFor="secondaryPh">
                Secondary phone number
              </LabelStyled>
              <Field
                type="text"
                id="secondaryPh"
                name="phoneNumbers[1]"
              ></Field>

              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {fieldArrayProps => {
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div>
                      {phNumbers.map((number, index) => (
                        <div key={index}>
                          <Field name={`phNumbers[${index}]`} />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                          <button type="button" onClick={() => push('')}>
                            +
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                }}
              </FieldArray>
              <button
                type="button"
                onClick={() => formik.validateField('comments')}
              >
                Validate comments
              </button>
              <button type="button" onClick={() => formik.validateForm()}>
                Validate all
              </button>
              <button
                type="button"
                onClick={() => formik.setFieldTouched('comments')}
              >
                Visit comments
              </button>
              <button
                type="button"
                onClick={() =>
                  formik.setTouched({
                    name: true,
                    email: true,
                    channel: true,
                    comments: true,
                  })
                }
              >
                Visit all
              </button>
              <BtnStyled type="submit" disabled={!formik.isValid}>
                SUBMIT
              </BtnStyled>
            </Form>
          </section>
        );
      }}
    </Formik>
  );
};
