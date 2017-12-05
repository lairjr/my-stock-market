import React from 'react';
import ShareCard from './ShareCard';
import { shallow } from 'enzyme';

describe('ShareCard', () => {
  it('passes name to CardHeader title', () => {
    const component = shallow(<ShareCard name="SOME SHARE" />);

    expect(component.find('CardHeader').prop('title')).toBe('SOME SHARE');
  });
});
