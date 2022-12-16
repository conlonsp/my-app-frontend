import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import FindHome from './FindHome'
import ListHome from './ListHome'
import {Route, Switch} from 'react-router-dom'
import '../App.css';
import ListHome from './ListHome'



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
