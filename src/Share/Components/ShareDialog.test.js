import React from 'react';
import { shallow } from 'enzyme';
import ShareDialog from './ShareDialog';

describe('ShareDialog', () => {
  it('passes isOpen to material dialog', () => {
    const dialog = shallow(<ShareDialog isOpen />);

    expect(dialog.prop('open')).toBe(true);
  });
});
