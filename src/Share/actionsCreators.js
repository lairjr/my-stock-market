import * as actions from './actions';

export const addShare = payload => ({
  type: actions.ADD_SHARE,
  payload,
});

export default {
  addShare,
};
