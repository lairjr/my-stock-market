import React from 'react';
import { shallow } from 'enzyme';
import ShareDialog from './ShareDialog';
import AddShare from '../Forms/AddShare';

describe('ShareDialog', () => {
  it('passes isOpen to material dialog', () => {
    const dialog = shallow(<ShareDialog isOpen />);

    expect(dialog.prop('open')).toBe(true);
  });

  it('uses onCancel in the first action', () => {
    const onCancel = jest.fn();
    const dialog = shallow(<ShareDialog onCancel={onCancel} />);
    const firstAction = dialog.prop('actions')[0];

    expect(firstAction.props.onClick).toBe(onCancel);
  });

  it('uses onSubmit in the second action', () => {
    const onSubmit = jest.fn();
    const dialog = shallow(<ShareDialog onSubmit={onSubmit} />);
    const secondAction = dialog.prop('actions')[1];

    expect(secondAction.props.onClick).toBe(onSubmit);
  });

  it('passes onFormSubmit to add share form', () => {
    const onFormSubmit = jest.fn();
    const dialog = shallow(<ShareDialog onFormSubmit={onFormSubmit} />);

    expect(dialog.find(AddShare).prop('onSubmit')).toBe(onFormSubmit);
  });
});
