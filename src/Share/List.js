import { connect } from 'react-redux';
import React from 'react';
import ShareList from './Components/ShareList';
import '../App.css';

export const List = ({ shares }) => (
  <ShareList shares={shares} />
);

export const mapStateToProps = ({ shares }) => {
  return {
    shares
  };
};

export default connect(mapStateToProps)(List);
