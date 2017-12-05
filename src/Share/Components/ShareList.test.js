import React from 'react';
import { shallow } from 'enzyme';
import ShareList from './ShareList';

describe('ShareList', () => {
  it('renders ShareCard for each share', () => {
    const shares = [{ id: 1, name: 'SOME' }, { id: 2, name: 'ANOTHER' }];
    const component = shallow(<ShareList shares={shares} />);

    expect(component.find('ShareCard').at(0).prop('name')).toBe('SOME');
    expect(component.find('ShareCard').length).toBe(2);
  });
});
