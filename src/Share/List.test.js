import { List, mapStateToProps } from './List';
import { shallow } from 'enzyme';
import React from 'react';

describe('List', () => {
  it('renders share name', () => {
    const shares = [{ name: 'Some share' }];
    const list = shallow(<List shares={shares} />);

    expect(list.text()).toContain('Some share');
  });
});

describe('mapStateToProps', () => {
  it('maps shares', () => {
    const shares = ['some shares'];
    const result = mapStateToProps({ shares });

    expect(result.shares).toBe(shares);
  });
});
