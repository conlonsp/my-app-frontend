import React from 'react'

function AgentsContainer({ agents }) {
  console.log(agents)
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