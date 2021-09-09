import { createStore } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {compose, applyMiddleware} from 'redux';
import { chatsReducer } from './chats';
import { messageReducer } from './messages';
import { commentsReducer } from './comments';
import { postsReducer } from './posts'
import { userReducer } from './user';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    comments: commentsReducer,
    posts: postsReducer,
    user: userReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
