import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Posts } from './pages/Posts/Posts';

import { SignUp } from './pages/SignUp/SignUp';
import { LogIn } from './pages/logIn/logIn';
import { useDispatch} from 'react-redux';
import { useEffect, useRef } from 'react';
import { getIsAuth, initAuthAction } from './store/user';
import { initChatsTracking } from './store/chats';
import { useSelector } from 'react-redux';
import { PrivateRoute } from './hocs/PrivateRoute/PrivateRoute';

const App = () => {
  const isAuth = useSelector(getIsAuth);
  const prevIsAuth = useRef(isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAuthAction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    /* console.log (isAuth, prevIsAuth.current) */
    if (isAuth !== prevIsAuth.current) {
      dispatch(initChatsTracking);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  


  return (
      <Switch>
        <PrivateRoute auth={isAuth} path='/chatpage'>
          <ChatPage/>
        </PrivateRoute>

        <PrivateRoute auth={isAuth} path='/profile'>
          <Profile/>
        </PrivateRoute>

        <PrivateRoute auth={isAuth} path="/posts">
          <Posts />
        </PrivateRoute>

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