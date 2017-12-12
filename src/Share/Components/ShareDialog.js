import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import MaterialDialog from 'material-ui/Dialog';

const actions = [
  <FlatButton
    label="Cancel"
    onClick={() => {}}
  />,
  <FlatButton
    label="Save"
    primary
    keyboardFocused
    onClick={() => {}}
  />,
];

const ShareDialog = ({ isOpen }) => (
  <MaterialDialog
    title="New share"
    modal={false}
    open={isOpen}
    actions={actions}
  >
     Open a Date Picker dialog from within a dialog.
  </MaterialDialog>
);

ShareDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ShareDialog;
