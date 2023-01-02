import React from 'react'
import Agent from './Agent'

function AgentsContainer({ agents }) {

  return (
    <div>
      {agents.map(agent => {
        return (
          <Agent key={agent.id} agent={agent} />
        )
      })}
    </div>
  )
}

export default AgentsContainer