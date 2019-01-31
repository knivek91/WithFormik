import React, { Component } from 'react';
import { withFormik } from 'formik';
import Form from '../Form';

const WithFormik = withFormik({
    
    mapPropsToValues: (props) => ({ ...props.formData }), // get the initial values (props) for the formik

    validate: values => {
      const errors = {};
      if (!values.user) {
        errors.user = 'Name is required.';
      }
      if(!values.pass) {
        errors.pass = 'Password is required.';
      }
      return errors;
    },
  
    handleSubmit: (values, { props }) => {
      const obj = {
        currentValues: {
          ...values
        },
        passedValues: {
          ...props
        }
      }
      alert(JSON.stringify(obj, null, 2));
      props.alertHandlerSubmit();
    },
  
    displayName: 'withFormik',
    
})(Form);

export default class WithFormikForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      user: 'Josh Doe',
      pass: 'password'
    };
  }

alertHandlerSubmit = () => {
  alert('Exec alertHandlerSubmit as a prop!');
}

    render() {
        // formik will receive as "props" the values & functions
        return (
            <WithFormik 
              formData={this.state}
              alertHandlerSubmit={this.alertHandlerSubmit}
            />
        )
    }

}