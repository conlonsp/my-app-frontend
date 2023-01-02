import React from 'react'
import Agent from './Agent'

function AgentsContainer({ agents, setAgents }) {
  
  function handleAgentDelete(id) {
    const updatedAgents = agents.filter(agent => agent.id !== id)
    setAgents(updatedAgents)
  }

  return (
    <div>
      {agents.map(agent => {
        return (
          <Agent key={agent.id} agent={agent} onAgentDelete={handleAgentDelete} />
        )
      })}
    </div>
  )
}

export default AgentsContainer