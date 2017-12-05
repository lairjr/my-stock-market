import React from 'react';
import ShareCard from './ShareCard';

const ShareList = ({ shares }) => (
  <div>
    { shares.map((share) => <ShareCard name={share.name} />)}
  </div>
);

ShareList.displayName = 'ShareList';

export default ShareList;
