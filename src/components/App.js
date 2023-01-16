import React, {useState, useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header'
import ListingsContainer from './ListingsContainer'
import AgentsContainer from './AgentsContainer'
import HomePage from './HomePage'


import '../App.css';

function App() {
  const [homes, setHomes] = useState([])
  const [agents, setAgents] = useState([])
  const [appointments, setAppointments] = useState([])

  // const updatedAppointments = homes.map(home => {
  //   appointments.filter(appt => appt.home_id === home.id)
  // })

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
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/listings'>
          <ListingsContainer
            homes={homes}
            setHomes={setHomes}
            appointments={appointments}
            setAppointments={setAppointments}
            agents={agents}
          />
        </Route>
        <Route path='/agents'>
          <AgentsContainer agents={agents} setAgents={setAgents} />
        </Route>
        <Route exact path='/'>
          <HomePage agents={agents} homes={homes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
