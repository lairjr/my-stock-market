import React from 'react';
import PropTypes from 'prop-types';
import ShareCard from './ShareCard';

const ShareList = ({ shares }) => (
  <div>
    { shares.map(share => <ShareCard name={share.name} key={share.id} />)}
  </div>
);

ShareList.defaultProps = {
  shares: [],
};

ShareList.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

ShareList.displayName = 'ShareList';

export default ShareList;
