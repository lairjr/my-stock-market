import { shallow } from 'enzyme';
import React from 'react';
import * as redux from 'redux';
import { List, mapDispatchToProps, mapStateToProps, mergeProps } from './List';

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

  it('passes submitForm to onSubmit for dialog', () => {
    const submitForm = jest.fn();
    const list = shallow(<List {...{ submitForm }} />);

    expect(list.find('ShareDialog').prop('onSubmit')).toBe(submitForm);
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

describe('mergeProps', () => {
  it('merges submit on submitForm', () => {
    const dispatchProps = { submit: jest.fn() };
    const result = mergeProps({}, dispatchProps);

    result.submitForm();

    expect(dispatchProps.submit.mock.calls[0][0]).toBe('addShare');
  });

  it('keeps stateProps and dispatchProps in result', () => {
    const stateProps = { someStateProp: 'some value' };
    const dispatchProps = { submit: jest.fn() };
    const result = mergeProps(stateProps, dispatchProps);

    expect(result).toEqual(expect.objectContaining(stateProps));
    expect(result).toEqual(expect.objectContaining(dispatchProps));
  });
});
