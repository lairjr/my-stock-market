import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import share from './Share';

const rootReducer = combineReducers({
  share: share.reducer,
  form: formReducer,
});

export default createStore(rootReducer);
