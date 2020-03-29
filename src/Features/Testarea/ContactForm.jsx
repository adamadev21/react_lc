import { reduxForm, Field } from 'redux-form';
import React from 'react';
const validate = values => {
    const errors = {}
    if (!values.firstName){
        errors.firstName='Required'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
      errors.lastName = 'Required'
    }
    return errors
  }

  const renderInput = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span style={{color:'red'}}>{error}</span>))}
      </div>
    </div>
  )
let ContactForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={renderInput} type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component={renderInput} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderInput} type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default reduxForm({
  form: 'contact',
  validate
})(ContactForm);
