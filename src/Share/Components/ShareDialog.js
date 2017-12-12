import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import MaterialDialog from 'material-ui/Dialog';

const ShareDialog = ({ isOpen, onCancel, onSubmit }) => {
  const actions = [
    <FlatButton
      label="Cancel"
      onClick={onCancel}
    />,
    <FlatButton
      label="Save"
      primary
      keyboardFocused
      onClick={onSubmit}
    />,
  ];

  return (
    <MaterialDialog
      title="New share"
      modal={false}
      open={isOpen}
      actions={actions}
    >
       Open a Date Picker dialog from within a dialog.
    </MaterialDialog>
  );
};

ShareDialog.displayName = 'ShareDialog';

ShareDialog.defaultProps = {
  isOpen: false,
  onCancel: () => {},
  onSubmit: () => {},
};

ShareDialog.propTypes = {
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default ShareDialog;
