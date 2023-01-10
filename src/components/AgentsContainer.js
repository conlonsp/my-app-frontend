import React from 'react'
import Agent from './Agent'
import AgentPostForm from './AgentPostForm'

function AgentsContainer({ agents, setAgents }) {
  
  function handleAgentDelete(id) {
    const updatedAgents = agents.filter(agent => agent.id !== id)
    setAgents(updatedAgents)
  }

  return (
    <div className='item4'>
      <h2>Agents</h2>
      {agents.map(agent => {
        return (
          <Agent key={agent.id} agent={agent} onAgentDelete={handleAgentDelete} />
        )
      })}
      <AgentPostForm agents={agents} setAgents={setAgents} />
    </div>
  )
}

export default AgentsContainer