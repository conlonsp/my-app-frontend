import React, {useState, useEffect} from 'react'

import Header from './Header'
import PostForm from './PostForm'
import ListingsContainer from './ListingsContainer'
import AgentsContainer from './AgentsContainer'
import AppointmentContainer from './AppointmentContainer'

import '../App.css';

function App() {
  const [homes, setHomes] = useState([])
  const [agents, setAgents] = useState([])
  const [appointments, setAppointments] = useState([])

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

  useEffect(() => {
    fetch("http://localhost:9492/appointments")
    .then(r => r.json())
    .then(data => setAppointments(data))
  }, [])

  return (
    <div className="App-header">
      <Header />
      <PostForm homes={homes} setHomes={setHomes} />
      <ListingsContainer
        homes={homes}
        setHomes={setHomes}
        appointments={appointments}
      />
      <AppointmentContainer appointments={appointments}/>
      <AgentsContainer agents={agents} />
    </div>
  );
}

export default App;
