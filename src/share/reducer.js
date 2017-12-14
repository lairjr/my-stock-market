import * as actions from './actions';

const initialState = {
  shares: [{
    id: 1,
    name: 'MOCK',
  }],
};

const shareReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_SHARE: {
      return {
        shares: [
          ...state.shares,
          {
            id: state.shares.length + 1,
            ...payload,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export default shareReducer;
