import React, {useState, useEffect} from 'react'

import Header from './Header'
import PostForm from './PostForm'
import ListingsContainer from './ListingsContainer'

import '../App.css';

function App() {
  const [homes, setHomes] = useState("")

  useEffect(() => {
    fetch("http://localhost:9392/homes")
    .then(r => r.json)
    .then(homes => setHomes(homes))
  })
  
  return (
    <div className="App-header">
      <Header />
      <PostForm />
      <ListingsContainer homes={homes}/>
    </div>
  );
}

export default App;
