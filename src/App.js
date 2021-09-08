import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { Provider } from 'react-redux';
import { store } from './store/store'
import { Posts } from './pages/Posts/Posts';

const App = () => {

  return (
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
  );
}

export default App;