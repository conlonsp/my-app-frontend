import React, {useState, useEffect} from 'react'

import Header from './Header'
import PostForm from './PostForm'
import ListingsContainer from './ListingsContainer'
import AgentsContainer from './AgentsContainer'

import '../App.css';

function App() {
  const [homes, setHomes] = useState([])
  const [agents, setAgents] = useState([])

  useEffect(() => {
    fetch("http://localhost:9492/homes")
    .then(r => r.json())
    .then(data => setHomes(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:9492/agents")
    .then(r => r.json())
    .then(data => setAgents(data))
  }, [])

  function handleHomeDelete(id) {
    const updatedHomes = homes.filter(home => home.id !== id)
    setHomes(updatedHomes)
  } 
  
  return (
    <div className="App-header">
      <Header />
      <PostForm homes={homes} setHomes={setHomes} />
      <ListingsContainer homes={homes} onHomeDelete={handleHomeDelete} />
      <AgentsContainer agents={agents} />
    </div>
  );
}

export default App;
