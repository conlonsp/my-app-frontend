import React from 'react'

function AgentPostForm() {

  return (
    <div>
      <h2>Register an Agent</h2>
      <form>
        <label>Agent Name: </label>
        <input
          type='text'
          name='name'
          placeholder='ex: Joe Shmoe'
        />
        <label>Brokerage: </label>
        <input
          type='text'
          name='brokerage'
          placeholder='ex: Brokerage Real Estate'
        />
        <label>Email: </label>
        <input
          type='text'
          name='email'
          placeholder='ex: email@email.com'
        />
        <label>Phone #: </label>
        <input
          type='text'
          name='phone_number'
          placeholder='ex: 1112223333'
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AgentPostForm