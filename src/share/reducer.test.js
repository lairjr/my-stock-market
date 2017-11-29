import shareReducer from './reducer';

describe('share reducer', () => {
  it('returns dummy shares', () => {
    const result = shareReducer();

    expect(result.shares).toEqual([{ id: 1, name: 'MOCK' }]);
  });
});
