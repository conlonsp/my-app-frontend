import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NavBar from './NavBar'
import Home from './Header'
import FindHome from './PostForm'
import ListHome from './ListingsContainer'

import '../App.css';

function App() {
  return (
    <div className="App-header">
      <NavBar />
      <Switch>
        <Route path='/list'>
          <ListHome />
        </Route>
        <Route path='/find'>
          <FindHome />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
