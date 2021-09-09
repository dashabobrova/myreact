import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Posts } from './pages/Posts/Posts';

import { SignUp } from './pages/SignUp/SignUp';
import { LogIn } from './pages/logIn/logIn';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { initAuthAction } from './store/user';
import { initChatsTracking } from './store/chats';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initChatsTracking);
    dispatch(initAuthAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
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

        <Route exact path="/signUp">
          <SignUp />
        </Route>

        <Route exact path="/logIn">
          <LogIn />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>    
      </Switch> 
  );
}

export default App;