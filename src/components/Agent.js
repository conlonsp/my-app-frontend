import React, {useState} from 'react'
import {Card, Image, Segment} from 'semantic-ui-react'

function Agent({ agent, onAgentDelete }) {
  const {id, name, brokerage, email, phone_number, profile_pic} = agent

  const [isClicked, setIsClicked] = useState(false)

  function handleDelete() {
    fetch(`http://localhost:9492/agents/${id}`, {
      method: 'DELETE',
    })
    onAgentDelete(id)
  }

  function handleClick() {
    setIsClicked(!isClicked)
  }

  return (
    <Card>
      <Segment.Group>
        <Segment>
          <div>
            <Image src={profile_pic} avatar />
            <span className='username'>{name}</span>
            <span className='username' style={{float: 'right'}}>{brokerage}</span>
            <Segment>
              <div className='contact-info'>
                <Card.Meta>{phone_number}</Card.Meta>
                <Card.Meta>{email}</Card.Meta>
              </div>
            </Segment>
          </div>
        </Segment>
      </Segment.Group>
      {/* <Image
        src={profile_pic}
        avatar
      />
      <span className='username'>{name}</span> */}
        {/* <div>
          Brokerage: {brokerage}
          <br/>
          Email: {email}
          <br/>
          Phone: {phone_number}
          <br/>
          <button onClick={handleDelete}>Delete</button>
          <br/>
        </div> */}
    </Card>
  )
}

export default Agent