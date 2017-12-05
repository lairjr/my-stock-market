import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from 'material-ui/Card';

const ShareCard = ({ name }) => (
  <Card>
    <CardHeader
      title={name}
    />
  </Card>
);

ShareCard.propTypes = {
  name: PropTypes.string.isRequired,
};

ShareCard.displayName = 'ShareCard';

export default ShareCard;
