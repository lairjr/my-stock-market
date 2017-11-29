import { connect } from 'react-redux';
import React from 'react';
import '../App.css';

export const List = ({ shares }) => (
  <div>
    {shares[0].name}
  </div>
);

export const mapStateToProps = ({ shares }) => {
  return {
    shares
  };
};

export default connect(mapStateToProps)(List);
