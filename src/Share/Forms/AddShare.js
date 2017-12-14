import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

export const AddShare = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="name" component={TextField} hintText="Share name" />
  </form>
);

AddShare.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'addShare' })(AddShare);
