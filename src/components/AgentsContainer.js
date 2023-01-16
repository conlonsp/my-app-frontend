import React from 'react'
import Agent from './Agent'
import AgentPostForm from './AgentPostForm'
import {Card} from 'semantic-ui-react'

function AgentsContainer({ agents, setAgents }) {
  
  function handleAgentDelete(id) {
    const updatedAgents = agents.filter(agent => agent.id !== id)
    setAgents(updatedAgents)
  }

  return (
     <div className='container'>
      <AgentPostForm agents={agents} setAgents={setAgents} />
      <br/>
      <h1 id='contact-card-title'>Contact Cards</h1>
      <Card.Group itemsPerRow={3}>
        {agents.map(agent => {
          return (
            <Agent key={agent.id} agent={agent} onAgentDelete={handleAgentDelete} />
          )
        })}
      </Card.Group>
     </div>
  )
}

export default AgentsContainer