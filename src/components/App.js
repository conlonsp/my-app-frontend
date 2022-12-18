import React, {useState, useEffect} from 'react'

import Header from './Header'
import PostForm from './PostForm'
import ListingsContainer from './ListingsContainer'

import '../App.css';

function App() {
  return (
    <div className="App-header">
      <Header />
      <PostForm />
      <ListingsContainer />
    </div>
  );
}

export default App;
