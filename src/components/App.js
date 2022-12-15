import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import {Route, Switch} from 'react-router-dom'
import '../App.css';



function App() {
  return (
    <div className="App-header">
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
