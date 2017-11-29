import { createStore } from 'redux';
import share from './share';

export default createStore(share.reducer);
