import React, {useState} from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  const [user, setUser] = useState(null);

  return (
    <HashRouter>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/rooms/:id">
                <Chat />         
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </div>
        )}
      </div>
    </HashRouter>
  );
}

export default App;
