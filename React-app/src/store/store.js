import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { messageReducer } from './messages';
import thunk from 'redux-thunk';
import {compose, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer
})

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);
