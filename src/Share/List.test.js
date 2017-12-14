import { shallow } from 'enzyme';
import React from 'react';
import * as redux from 'redux';
import { List, mapDispatchToProps, mapStateToProps } from './List';

describe('List', () => {
  it('renders a share list', () => {
    const addShare = jest.fn();
    const shares = [{ name: 'Some share' }];
    const list = shallow(<List {...{ addShare, shares }} />);

    expect(list.find('ShareList').prop('shares')).toBe(shares);
  });

  it('passes handleDialogClose to onCancel for dialog', () => {
    const addShare = jest.fn();
    const list = shallow(<List {...{ addShare }} />);

    expect(list.find('ShareDialog').prop('onCancel')).toBe(list.instance().handleDialogClose);
  });

  it('passes addShare to onFormSubmit for dialog', () => {
    const addShare = jest.fn();
    const list = shallow(<List {...{ addShare }} />);

    expect(list.find('ShareDialog').prop('onFormSubmit')).toBe(addShare);
  });

  it('passes a function which calls submit func prop', () => {
    const submit = jest.fn();
    const list = shallow(<List {...{ submit }} />);

    list.find('ShareDialog').prop('onSubmit')();
    expect(submit).toBeCalled();
  });

  describe('handleDialogOpen', () => {
    it('sets the state open to true', () => {
      const addShare = jest.fn();
      const list = shallow(<List {...{ addShare }} />);

      list.instance().handleDialogOpen();
      expect(list.state('open')).toBe(true);
    });
  });

  describe('handleDialogClose', () => {
    it('sets the state open to true', () => {
      const addShare = jest.fn();
      const list = shallow(<List {...{ addShare }} />);

      list.instance().handleDialogClose();
      expect(list.state('open')).toBe(false);
    });
  });
});

describe('mapStateToProps', () => {
  it('maps shares', () => {
    const share = { shares: ['some shares'] };
    const result = mapStateToProps({ share });

    expect(result.shares).toBe(share.shares);
  });
});

describe('mapDispatchToProps', () => {
  it('calls and returns bindActionCreators', () => {
    const dispatch = jest.fn();
    redux.bindActionCreators = jest.fn().mockImplementation(() => 'mock');
    const result = mapDispatchToProps(dispatch);

    expect(redux.bindActionCreators.mock.calls[0][1]).toBe(dispatch);
    expect(result).toBe('mock');
  });
});
