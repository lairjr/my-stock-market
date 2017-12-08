import { shallow } from 'enzyme';
import React from 'react';
import { List, mapStateToProps } from './List';

describe('List', () => {
  it('renders a share list', () => {
    const shares = [{ name: 'Some share' }];
    const list = shallow(<List shares={shares} />);

    expect(list.find('ShareList').prop('shares')).toBe(shares);
  });

  describe('handleDialogOpen', () => {
    it('sets the state open to true', () => {
      const list = shallow(<List shares={[]} />);

      list.instance().handleDialogOpen();
      expect(list.state('open')).toBe(true);
    });
  });

  describe('handleDialogClose', () => {
    it('sets the state open to true', () => {
      const list = shallow(<List shares={[]} />);

      list.instance().handleDialogClose();
      expect(list.state('open')).toBe(false);
    });
  });
});

describe('mapStateToProps', () => {
  it('maps shares', () => {
    const shares = ['some shares'];
    const result = mapStateToProps({ shares });

    expect(result.shares).toBe(shares);
  });
});
