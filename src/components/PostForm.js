import React, {useState} from 'react'

function PostForm({ setHomes }) {
  const [createListing, setCreateListing] = useState({
    address: '',
    price: '',
    square_feet: '',
    agent_id: '',
  })

  function handleChange(event) {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setCreateListing({
      ...createListing,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newListing = {
      address: createListing.address,
      price: createListing.price,
      square_feet: createListing.square_feet,
      agent_id: createListing.agent_id,
    }
    fetch("http://localhost:9492/homes"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newListing)
    }
    .then(r => r.json())
    .then(data =>)
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
          value={createListing.address}
          onChange={handleChange}
        />
        <label>Price: </label>
        <input
          type='text'
          name='price'
          placeholder='ex: 50000'
          value={createListing.price}
          onChange={handleChange}
        />
        <label>Square Feet: </label>
        <input
          type='text'
          name='square_feet'
          placeholder='ex: 250'
          value={createListing.square_feet}
          onChange={handleChange}
        />
        <label>Agent ID #: </label>
        <input
          type='text'
          name='agent_id'
          placeholder='ex: 7'
          value={createListing.agent_id}
          onChange={handleChange}
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