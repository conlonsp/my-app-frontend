import React, {useState} from 'react'

function ListingPostForm({ homes, setHomes }) {
  const [showForm, setShowForm] = useState(false)
  const [createListing, setCreateListing] = useState({
    address: '',
    price: '',
    square_feet: '',
    image_url: '',
  })

  function handleShowForm() {
    setShowForm(!showForm)
  }

  function handleChange(event) {
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
      image_url: createListing.image_url,
    }
    fetch("http://localhost:9492/homes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newListing)
    })
    .then(r => r.json())
    .then(data => setHomes([...homes, data]))
  }

  return (
    <div className='item6'>
      {!showForm ?
      <button onClick={handleShowForm}>Post Listing</button>
      :
      <div>
        <h2>Post a Listing</h2>
        <form onSubmit={handleSubmit}>
          <label>Address: </label>
          <input
            type='text'
            name='address'
            placeholder='ex: 123 Street St, Town, MA 12345'
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
          <label>Image URL: </label>
          <input
            type='text'
            name='image_url'
            placeholder='ex: 7'
            value={createListing.image_url}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
        <button onClick={handleShowForm}>Hide</button>
      </div>
      }
    </div>
  )
}

export default ListingPostForm