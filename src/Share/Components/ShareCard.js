import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

export const ShareCard = ({ name }) => (
  <Card>
    <CardHeader
      title={name}
    />
  </Card>
);

ShareCard.displayName = 'ShareCard';

export default ShareCard;
