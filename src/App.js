import React from 'react'
import { Switch } from 'react-router';
import 'rsuite/dist/styles/rsuite-default.css'
import NavBar from './component/NavBar';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
import { ProfileProvider } from './misc/profile.context';
import HeadPhones from './pages/HeadPhones';
import Home from './pages/Home';
import KeyBoards from './pages/KeyBoards';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div>
    <ProfileProvider>
      <NavBar/>
      <Switch>
      <PublicRoute path ="/signin"> 
        <SignIn />
      </PublicRoute>
      <PrivateRoute exact path="/" >
        <Home/>
      </PrivateRoute>
      <PrivateRoute exact path="/headphones">
          <HeadPhones />
        </PrivateRoute>
        <PrivateRoute exact path="/keyboards">
          <KeyBoards />
        </PrivateRoute>
      </Switch>
      </ProfileProvider>

    </div>
  );
}

export default App;
