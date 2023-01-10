import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header'
import ListingsContainer from './ListingsContainer'
import AgentsContainer from './AgentsContainer'
import AppointmentContainer from './AppointmentContainer'
import AgentPostForm from './AgentPostForm'


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
    <div className="grid-container">
      <Header />
      <Switch>
        <Route path='/listings'>
          <ListingsContainer
            homes={homes}
            setHomes={setHomes}
            appointments={appointments}
          />
        </Route>
        <Route path='/agents'>
          <AgentsContainer agents={agents} setAgents={setAgents} />
        </Route>
      </Switch>
      {/* 
      <AgentPostForm agents={agents} setAgents={setAgents} />
      
      <AppointmentContainer
        appointments={appointments}
        setAppointments={setAppointments}
        homes={homes}
      />
      <AgentsContainer agents={agents} setAgents={setAgents} /> */}
    </div>
  );
}

export default App;
