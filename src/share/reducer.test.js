import shareReducer from './reducer';
import * as actions from './actions';

describe('share reducer', () => {
  it('returns dummy shares', () => {
    const result = shareReducer(undefined, {});

    expect(result.shares).toEqual([{ id: 1, name: 'MOCK' }]);
  });

  it('adds a share', () => {
    const state = { shares: [{ id: 1, name: 'Foo' }] };
    const result = shareReducer(state, { type: actions.ADD_SHARE, payload: { name: 'NEW' } });

    expect(result.shares.length).toBe(2);
    expect(result.shares[1].name).toEqual('NEW');
  });
});
