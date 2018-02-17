import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { submit } from 'redux-form';
import ShareList from './Components/ShareList';
import ShareDialog from './Components/ShareDialog';
import * as actionsCreators from './actionsCreators';
import '../App.css';

export class List extends Component {
  state = {
    open: false,
  };

  handleDialogOpen = () => {
    this.setState({ open: true });
  };

  handleDialogClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <ShareList shares={this.props.shares} />
        <FloatingActionButton>
          <ContentAdd onClick={this.handleDialogOpen} />
        </FloatingActionButton>
        <ShareDialog
          isOpen={this.state.open}
          onCancel={this.handleDialogClose}
          onSubmit={this.props.submitForm}
          onFormSubmit={this.props.addShare}
        />
      </div>
    );
  }
}

List.defaultProps = {
  addShare: () => {},
  shares: [],
  submitForm: () => {},
};

List.propTypes = {
  addShare: PropTypes.func,
  shares: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
  submitForm: PropTypes.func,
};

export const mapStateToProps = ({ share }) => ({
  shares: share.shares,
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ ...actionsCreators, submit }, dispatch)
);

export const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  submitForm: () => dispatchProps.submit('addShare'),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(List);
