import React, { useState } from 'react'
import AppointmentPostForm from './AppointmentPostForm'
import { Card, Image, Button, Form } from 'semantic-ui-react'
//import 'semantic-ui-css/semantic.min.css'






function Listing({ home, onHomeDelete, onUpdateHome, appointments, setAppointments, agents }) {

  const { id, address, price, square_feet, image_url, } = home

  // const [isClicked, setIsClicked] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)
  const [updatedHome, setUpdatedHome] = useState({
    address: address,
    price: price,
    square_feet: square_feet,
    image_url: image_url
  })

  const updatedAppts = appointments.filter(appt => appt.home_id === home.id)

  const addressArr = address.split(',')
  const street = addressArr[0]
  const city = addressArr[1]
  const state = addressArr[2]
  
  function handleDelete() {
    fetch(`http://localhost:9492/homes/${id}`, {
      method: 'DELETE',
    })
    onHomeDelete(id)
  }

  function handleUpdateButton() {
    setIsUpdate(!isUpdate)
  }

  function handleChange(event) {
    setUpdatedHome({
      ...updatedHome,
      [event.target.name]: event.target.value
    })
  }

  // function handleClick() {
  //   setIsClicked(!isClicked)
  // }

  function handleUpdateHomeAppts(id) {
    const updatedHomeAppts = appointments.filter(appt => appt.home_id === id)
    setAppointments(updatedHomeAppts)
  }

  function handleUpdateSubmit(event) {
    event.preventDefault()
    const newUpdate = {
      address: updatedHome.address,
      price: updatedHome.price,
      square_feet: updatedHome.square_feet,
      image_url: updatedHome.image_url,
    }
    fetch(`http://localhost:9492/homes/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUpdate)
    })
    .then(r => r.json())
    .then(data => onUpdateHome(data))
    setUpdatedHome({
      address: updatedHome.address,
      price: updatedHome.price,
      square_feet: updatedHome.square_feet,
      image_url: updatedHome.image_url,
    })
  }

  return (
    // <Card className='listing' >
    //   <Image src={image_url} className='listing-image'/>
    // </Card>

    <Card style={{textAlign: 'center'}}>
      <Card.Content>
        <Image
          width='320px'
          height='240px'
          src={image_url}
        />
        <div>...</div>
        <Card.Header>{street}</Card.Header>
        <Card.Meta>{city}</Card.Meta>
        <Card.Meta>{state}</Card.Meta>
        <Card.Description>
          Price: ${price} | Square Feet: {square_feet}
        </Card.Description>
        <Card.Description>
          Appointments:
          {updatedAppts.length > 0 ?
            updatedAppts.map(appt => {
              return (
                <li key={appt.id}>
                  {appt.scheduler} | {appt.time}
                </li>
              )
            })
            :
            "No Appointments Scheduled"
          }
        </Card.Description>
      </Card.Content>
      <AppointmentPostForm 
        key={home.id}
        home={home}
        appointments={appointments}
        setAppointments={setAppointments}
        agents={agents}
        onUpdateHomeAppts={handleUpdateHomeAppts}
      />
      <Card.Content extra>
        <div style={{alignContent: 'center'}}>
        {!isUpdate ?
          <Button onClick={handleUpdateButton} basic color='yellow'>
            ✏️
          </Button>
          :
          <Card style={{width: '100%'}}>
            <Form onSubmit={handleUpdateSubmit} style={{textAlign: 'center'}}>
              <Form.Field>
                  <label>Address: </label>
                  <input
                    type='text'
                    name='address'
                    placeholder={address}
                    onChange={handleChange}
                    value={updatedHome.address}
                  />
                  <br/>
                  <label>Price: </label>
                  <input
                    type='text'
                    name='price'
                    placeholder={price}
                    onChange={handleChange}
                    value={updatedHome.price}
                  />
                  <br/>
                  <label>Square Feet: </label>
                  <input
                    type='text'
                    name='square_feet'
                    placeholder={square_feet}
                    onChange={handleChange}
                    value={updatedHome.square_feet}
                  />
                  <br/>
                  <label>Image URL: </label>
                  <input
                    style={{width: '100%'}}
                    type='text'
                    name='image_url'
                    placeholder={image_url}
                    onChange={handleChange}
                    value={updatedHome.image_url}
                  />
                  <br/>
                  <Button style={{width: "100%"}} color='green'>Submit</Button>
                  </Form.Field>
                </Form>
                <Button onClick={handleUpdateButton} color='google plus'>Hide</Button>
              </Card>
            }
          <Button onClick={handleDelete} basic color='red'>
            ❌
          </Button>
        </div>
      </Card.Content>
    </Card>
    
    // <div className='listing-div'>
    //   {/* <Card.Group itemsPerRow={5}>
    //     <Card image={image_url}/>
    //   </Card.Group> */}
        
    //   <div>
    //     <br/>
    //     {!isClicked ?
    //       <Card>
    //         <img onClick={handleClick} src={image_url}  alt='home' display='radius' width="320" height="240"/>
    //       </Card>
    //       :
    //       <div>
    //         <h2>Price: ${price} | Square Feet: {square_feet}</h2>
    //         Appointments: 
    //         {updatedAppts.length > 0 ?
    //           updatedAppts.map(appt => {
    //             return (
    //               <li key={appt.id}>
    //                 {appt.scheduler} | {appt.time}
    //               </li>
    //             )
    //           })
    //           :
    //           "No Appointments Scheduled"
    //         }
    //         {!isUpdate ?
    //           <button onClick={handleUpdateButton}>✏️</button>
    //           :
    //           <div>
    //             <form onSubmit={handleUpdateSubmit}>
    //               <label>Address: </label>
    //               <input
    //                 type='text'
    //                 name='address'
    //                 placeholder={address}
    //                 onChange={handleChange}
    //                 value={updatedHome.address}
    //               />
    //               <label>Price: </label>
    //               <input
    //                 type='text'
    //                 name='price'
    //                 placeholder={price}
    //                 onChange={handleChange}
    //                 value={updatedHome.price}
    //               />
    //               <label>Square Feet: </label>
    //               <input
    //                 type='text'
    //                 name='square_feet'
    //                 placeholder={square_feet}
    //                 onChange={handleChange}
    //                 value={updatedHome.square_feet}
    //               />
    //               <label>Image URL: </label>
    //               <input
    //                 type='text'
    //                 name='image_url'
    //                 placeholder={image_url}
    //                 onChange={handleChange}
    //                 value={updatedHome.image_url}
    //               />
    //               <button>Submit</button>
    //             </form>
    //             <button onClick={handleUpdateButton}>Hide</button>
    //           </div>
    //         }
    //         <button onClick={handleDelete}>❌</button>
    //         <AppointmentPostForm
    //           key={home.id}
    //           home={home}
    //           appointments={appointments}
    //           setAppointments={setAppointments}
    //           agents={agents}
    //           onUpdateHomeAppts={handleUpdateHomeAppts}
    //         />
    //       </div>
    //     }
    //     {address}
    //   </div>
    // </div>
  )
}

export default Listing