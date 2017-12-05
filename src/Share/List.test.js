import { shallow } from 'enzyme';
import React from 'react';
import { List, mapStateToProps } from './List';

describe('List', () => {
  it('renders a share list', () => {
    const shares = [{ name: 'Some share' }];
    const list = shallow(<List shares={shares} />);

    expect(list.find('ShareList').prop('shares')).toBe(shares);
  });
});

describe('mapStateToProps', () => {
  it('maps shares', () => {
    const shares = ['some shares'];
    const result = mapStateToProps({ shares });

    expect(result.shares).toBe(shares);
  });
});
