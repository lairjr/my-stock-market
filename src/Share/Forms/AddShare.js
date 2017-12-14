import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const AddShare = () => (
  <form>
    <Field name="name" component={TextField} hintText="Share name" />
  </form>
);

export default reduxForm({ form: 'addShare' })(AddShare);
