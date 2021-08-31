import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { messageReducer } from './messages';

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());