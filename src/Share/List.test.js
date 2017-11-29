import { mapStateToProps } from './List';

describe('mapStateToProps', () => {
  it('maps shares', () => {
    const shares = ['some shares'];
    const result = mapStateToProps({ shares });

    expect(result.shares).toBe(shares);
  });
});
