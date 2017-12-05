import React from 'react';
import { shallow } from 'enzyme';
import ShareCard from './ShareCard';

describe('ShareCard', () => {
  it('passes name to CardHeader title', () => {
    const component = shallow(<ShareCard name="SOME SHARE" />);

    expect(component.find('CardHeader').prop('title')).toBe('SOME SHARE');
  });
});
