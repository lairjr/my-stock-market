import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import ShareList from './Components/ShareList';
import '../App.css';

export const List = ({ shares }) => (
  <ShareList shares={shares} />
);

List.defaultProps = {
  shares: [],
};

List.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

export const mapStateToProps = ({ shares }) => ({
  shares,
});

export default connect(mapStateToProps)(List);
