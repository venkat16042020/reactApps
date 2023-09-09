import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PersonServices from '../../services/PersonServices'
import Header from '../Header/Header'

const PostPutPersonComponent = () => {
  const [person_id, setPerson_Id] = useState('')
  const [personFirstName, setPersonFirstName] = useState('')
  const [personMiddleName, setPersonMiddleName] = useState('')
  const [personLastName, setPersonLastName] = useState('')
  const [dob, setdob] = useState('')
  const [street, setStreet] = useState('')
  const [landMark, setLandMark] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [timezone, setTimezone] = useState('')

  const history1 = useNavigate()
  var {personId} = useParams()
  var person = { personId, personFirstName, personLastName, personMiddleName, dob, street, landMark, city, state, country, zipcode, timezone}

const addOrEditPerson = (e)=>{
  e.preventDefault()
  if(personId){
    console.log("Editing person...")
    console.log(personId)
    console.log(person)
    PersonServices.updatePerson(personId, person).then(
      (response)=>{
        history1('/persons')
      }
    ).catch(error=>{
      console.log(error)
    })
  }else{
    personId = person_id
    person = {personId, personFirstName, personLastName, personMiddleName, dob, street, landMark, city, state, country, zipcode, timezone}
    console.log(person)
    PersonServices.addPerson(person).then(
      (response)=>{
        history1('/persons')
      }
    ).catch(error=>{
      console.log(error)
    })
  }
}

useEffect(()=>{
  PersonServices.getPersonById(personId).then((response)=>{
    setPerson_Id(response.data.personId)
    setPersonFirstName(response.data.personFirstName)
    setPersonLastName(response.data.personLastName)
    setPersonMiddleName(response.data.personMiddleName)
    setdob(response.data.dob)
    setStreet(response.data.street)
    setLandMark(response.data.landMark)
    setCity(response.data.city)
    setState(response.data.state)
    setCountry(response.data.country)
    setZipcode(response.data.zipcode)
    setTimezone(response.data.timezone)
    
  }).catch(error =>{
    console.log(error)
  })
}, [])

const title = () =>{
  if(personId){
    return "Edit Person"
  }else{
    return "Add Person"
  }
}

  return (
    <div>
      <Header></Header>
      <br></br>
      <div className='row'></div>
      <div className='card col-md-6 offset-md-3'>
        <br></br>
        <h3 className='text-center'>{title()}</h3>
        <div className='card-body'>
          <form>
        
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Person Id</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter Person Id'
                name='personId'
                value={person_id}
                onChange={(e)=> setPerson_Id(e.target.value)}>                  
                </input>
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Person First Name</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter Person First Name'
                name='personFirstName'
                value={personFirstName}
                onChange={(e)=> setPersonFirstName(e.target.value)}>                  
                </input>
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Person Middle Name</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter person middle name'
                name='personMiddleName'
                value={personMiddleName}
                onChange={(e)=> setPersonMiddleName(e.target.value)}>                  
                </input>
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Person Last Name</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter Person Last Name'
                name='personLastName'
                value={personLastName}
                onChange={(e)=> setPersonLastName(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>dob</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter dob'
                name='dob'
                value={dob}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input>
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Street</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter street'
                name='street'
                value={street}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Land Mark</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter landMark'
                name='landMark'
                value={landMark}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>City</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter city'
                name='city'
                value={city}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>State</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter state'
                name='state'
                value={state}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Country</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter country'
                name='country'
                value={country}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Zipcode</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter zipcode'
                name='zipcode'
                value={zipcode}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input> 
              </div>
            </div>
            <div class='mb-3 row'>
              <label class='col-sm-4 col-form-label'>Timezone</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter timezone'
                name='timezone'
                value={timezone}
                onChange={(e)=> setdob(e.target.value)}>                  
                </input>
                <br></br>
                <button className='btn btn-succcess ms-1' onClick={(e)=>
                addOrEditPerson(e)}>{title()}</button>
                <Link to="/persons" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutPersonComponent