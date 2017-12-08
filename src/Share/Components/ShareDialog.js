import React from 'react';
import PropTypes from 'prop-types';
import MaterialDialog from 'material-ui/Dialog';

const ShareDialog = ({ isOpen }) => (
  <MaterialDialog
    title="New share"
    modal={false}
    open={isOpen}
  >
     Open a Date Picker dialog from within a dialog.
  </MaterialDialog>
);

ShareDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ShareDialog;
