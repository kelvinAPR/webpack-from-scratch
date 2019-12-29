import React, { useState } from 'react';
import './LoginForm.scss';

let mainRed = '#efb3b1';

import { Formik, Form as Formkit, useField } from 'formik';

import * as Yup from 'yup';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {meta.touched && meta.error ? (
        <React.Fragment>
          <input
            name={props.name}
            className={props.className}
            style={{ borderColor: mainRed }}
            {...props}
            {...field}
            id={props.id}
            hidden={props.hidden}
            placeholder={props.placeholder}
          ></input>

          <div className={`__ErrorCont animated fadeInLeft ${props.name}`}>
            {meta.error}
            <div className="error_pointer"></div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <input
            name={props.name}
            className={props.className}
            {...props}
            {...field}
            id={props.id}
            hidden={props.hidden}
            placeholder={props.placeholder}
          ></input>
        </React.Fragment>
      )}
    </>
  );
};

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="container">
        <input
          {...field}
          {...props}
          style={{ padding: '0', width: '0px' }}
          type="checkbox"
        />
        <span className="checkmark"></span>
        <p>{children}</p>
      </label>
      {meta.touched && meta.error ? (
        <div className={`__ErrorCont animated fadeInLeft ${props.name}`}>
          {meta.error}
          <div className="error_pointer"></div>
        </div>
      ) : null}
    </>
  );
};

/**
 * @description - Login Form component
 * @returns {component} form
 * @param props
 */

function LoginForm(props) {
  const [hidden, setHidden, finalError] = useState(true);
  const [errorFunc, setErrorFun] = useState('');
  function toggleVisible() {
    // eslint-disable-next-line no-shadow
    setHidden(hidden => !hidden);
  }
  if (props.errors && props.errors.mainError) {
    errorFunc('email', props.errors.mainError);
  }
  return (
    <div
      className={`__loginContainer animated fadeInRight del2 ${props.isLoading
        .isLoading && '__noOpacity'}`}
    >
      <h1>Sign in</h1>
      {finalError ? (
        <div className="__ErrorCont animated fadeInLeft error">
          {meta.error}
          <div className="error_pointer"></div>
        </div>
      ) : (
        ''
      )}
      <Formik
        initialValues={{
          password: '',
          email: '',
          errorEnd: '',
          rememberClient: false,
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .min(4, 'Must be 4 or more characters')
            .required('Password Field is Required'),
          email: Yup.string()
            .email('Invalid Email address')
            .required('Email Field is Required'),
          acceptedTerms: Yup.boolean(),
        })}
        onSubmit={(values, { setFieldError, setSubmitting }) => {
          // eslint-disable-next-line no-shadow
          setErrorFun(() => setFieldError);
          props.handleSubmit(values);
          setSubmitting(false);
        }}
      >
        <Formkit>
          <Input
            className={'login_input'}
            label={'Username'}
            name={'email'}
            type={'email'}
            id={'emailID'}
            placeholder={'johndoe@ubagroup.com'}
          />

          <Input
            label="Password"
            className={'login_input'}
            id={'passwordID'}
            name={'password'}
            type={hidden ? 'password' : 'text'}
            placeholder={'Enter your Password'}
          />

          <div onClick={toggleVisible} className="__showOrHidePassword">
            {hidden ? (
              <i className="eye icon tbh" />
            ) : (
              <i className="eye slash icon tbh" />
            )}
          </div>

          <Checkbox name="rememberClient">Remember me</Checkbox>

          <button className={`${props.isLoading.isLoading && 'isLoading'}`}>
            Sign In
          </button>
        </Formkit>
      </Formik>
    </div>
  );
}

export default LoginForm;
