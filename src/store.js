import { createStore } from 'redux';
import share from './Share';

export default createStore(share.reducer);
