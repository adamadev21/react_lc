import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { isEmail } from 'validator';
import { savePeople } from '../ReduxConfiguration/actions';

class Form extends Component {
  static propTypes = {
    people: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    saveStatus: PropTypes.string.isRequired,
    fields: PropTypes.object,
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    fields: this.props.fields || {
      name: '',
      email: '',
      course: null,
      department: null
    },
    fieldErrors: {}
  };

  validate() {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors.filter(k => fieldErrors[k]));
    if (!person.name) return true;
    if (!person.email) return true;
    if (!person.course) return true;
    if (!person.department) return true;
    if (errMessages.length) return true;

    return false;
  }
  componentWillReceiveProps(update) {
    console.log('this.props.fields', this.props.fields, update);
    this.setState({ fields: update.fields });
  }

  onFormSubmit = evt => {
    const person = this.state.fields;
    evt.preventDefault();
    if (this.validate()) return;
    this.props.onSubmit([...this.props.people, person]);
  };

  render() {
    if (this.props.isLoading) {
      return <img alt="loading" src="/img/loading.gif" />;
    }
    const dirty = Object.keys(this.state.fields).length;
    let status = this.props.saveStatus;
    if (status === 'SUCCESS' && dirty) status = 'READY';
    return (
      <div>
        <h1>Amazing Signup Form</h1>
        <form onSubmit={this.onFormSubmit}>
          <Field
            placeholder="Name"
            name="name"
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={val => (val ? false : 'Name Required')}
          />
          <br />
          <Field
            placeholder="Email"
            name="email"
            value={this.state.fields.email}
            onChange={this.onInputChange}
            validate={val => (isEmail(val) ? false : 'Invalid Email')}
          />
          <br />
          {/* <CourseSelect
    department={this.state.fields.department}
    course={this.state.fields.course}
    onChange={this.onInputChange}
    /> */}
          <br />
          {/* {
            {
              SAVING: <input value="Saving ..." type="submit" disabled />,
              SUCCESS: <input value="Saved!" type="submit" disabled />,
              ERROR: (
                <input
                  value="Save Failed - Retry?"
                  type="submit"
                  disabled={this.validate}
                />
              ),
              READY: (
                <input value="Submit" type="submit" disabled={this.validate} />
              )
            }[status]
          } */}
        </form>
        <div>
          <h3>People</h3>
          <ul>
            {this.props.people.map(({ name, email, department, course },i) => 
              <li key={i}> {[name, email, department, course].join(' - ')}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    fields: state.person,
    people: state.people,
    saveStatus: state.saveStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: people => {
      dispatch(savePeople(people));
    }
  };
};
Form = reduxForm({ form: 'contact', validate: Form.validate });

export default connect(mapStateToProps, mapDispatchToProps)(Form);
