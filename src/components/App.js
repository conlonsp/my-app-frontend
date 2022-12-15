import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'

import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
