import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './pages/Profile/Profile';
import { ChatPage } from './pages/ChatPage/ChatPage';

const App = () => {

  return (
    <>
    <Switch>
      <Route path='/chatpage'>
          <ChatPage/>
      </Route>

      <Route path='/profile'>
          <Profile/>
      </Route>

      <Route exact path="/">
          <HomePage />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>
        
  </Switch> 
</>
  );
}

export default App;