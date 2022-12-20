import React from 'react'

function PostForm() {

  return (
    <div>
      Post a Listing
      <form>
        <label>Address: </label>
        <input
          type='text'
          name='address'
          placeholder='123 Street St, Town, ST, 12345'
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
    </div>
  )
}

export default PostForm