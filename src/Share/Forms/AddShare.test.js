import React from 'react';
import { shallow } from 'enzyme';
import { AddShare } from './AddShare';

describe('AddShare', () => {
  it('passes handleSubmit to form', () => {
    const handleSubmit = jest.fn();
    const addShare = shallow(<AddShare {...{ handleSubmit }} />);

    expect(addShare.find('form').prop('onSubmit')).toBe(handleSubmit);
  });
});
