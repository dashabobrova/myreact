import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react';
import { CircularProgress } from '@material-ui/core';
import { Posts } from './pages/Posts/Posts';

const App = () => {

  return (
  <PersistGate persistor={persistor} loading={<CircularProgress />}>
    <Provider store={store}>
      <Switch>
        <Route path='/chatpage'>
          <ChatPage/>
        </Route>

        <Route path='/profile'>
          <Profile/>
        </Route>

        <Route path="/posts">
          <Posts />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>    
      </Switch> 
    </Provider> 
  </PersistGate>
  );
}

export default App;