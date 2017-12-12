import * as actionsCreators from './actionsCreators';

describe('addShare', () => {
  it('returns passed payload', () => {
    const somePayload = 'banana';
    const actionBody = actionsCreators.addShare(somePayload);

    expect(actionBody.payload).toBe(somePayload);
  });
});
