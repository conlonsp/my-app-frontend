import React, {useState} from 'react'

function PostForm() {
  const [newListing, setNewListing] = useState({
    address: '',
    price: '',
    square_feet: '',
    agent_id: '',
  })

  function handleChange(event) {
    event.preventDefault()
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Post a Listing</h2>
      <form>
        <label>Address: </label>
        <input
          type='text'
          name='address'
          placeholder='ex: 123 Street St, Town, ST, 12345'
          onChange={handleChange}
        />
        <label>Price: </label>
        <input
          type='text'
          name='price'
          placeholder='ex: 50000'
        />
        <label>Square Feet: </label>
        <input
          type='text'
          name='square_feet'
          placeholder='ex: 250'
        />
        <label>Agent ID #: </label>
        <input
          type='text'
          name='agent_id'
          placeholder='ex: 7'
        />
        <button>Submit</button>
      </form>
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

export default PostForm