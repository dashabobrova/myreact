import { createStore } from 'redux';
import { checkboxReducer } from './checkbox/checkboxReducer';

export const store = createStore(checkboxReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());