import React from 'react';
import PropTypes from 'prop-types';
import MaterialDialog from 'material-ui/Dialog';

const Dialog = ({ isOpen }) => (
  <MaterialDialog
    title="Share Info"
    modal={false}
    open={isOpen}
  >
     Open a Date Picker dialog from within a dialog.
  </MaterialDialog>
);

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Dialog;
