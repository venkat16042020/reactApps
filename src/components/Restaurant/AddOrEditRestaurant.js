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
  const [dob, setDob] = useState('')
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
    setDob(response.data.dob)
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
    return "Update Person"
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
          <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Person Id:</label>
                <input type='text' class='form-control' placeholder='Enter Person Id' name='person_id'
                  value={person_id} onChange={(e) => setPerson_Id(e.target.value)}>
                </input>
              </div>       
          <div class="col-3">
                <label for="text">First Name:</label>
                <input type='text' class='form-control' placeholder='Enter First Name' name='personFirstName'
                  value={personFirstName} onChange={(e) => setPersonFirstName(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Person Last Name:</label>
                <input type='text' class='form-control' placeholder='Enter Last Name' name='personLastName'
                  value={personLastName} onChange={(e) => setPersonLastName(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Middle Name:</label>
                <input type='text' class='form-control' placeholder='Enter Middle Name' name='personMiddleName'
                  value={personMiddleName} onChange={(e) => setPersonMiddleName(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Dob: </label>
                <input type='text' class='form-control' placeholder='Enter Dob' name='dob'
                  value={dob} onChange={(e) => setDob(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Street:</label>
                <input type='text' class='form-control' placeholder='Enter Street' name='street'
                  value={street} onChange={(e) => setStreet(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Landmark:</label>
                <input type='text' class='form-control' placeholder='Enter Land mark' name='landMark'
                  value={landMark} onChange={(e) => setLandMark(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">City: </label>
                <input type='text' class='form-control' placeholder='Enter City' name='city'
                  value={city} onChange={(e) => setCity(e.target.value)}>
                </input>
              </div>
            </div>   
            <div class='mb-3 row'>
            <div class="col-3">
                <label for="text">Country: </label>
                <input type='text' class='form-control' placeholder='Enter Country' name='country'
                  value={country} onChange={(e) => setCountry(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">ZipCode: </label>
                <input type='text' class='form-control' placeholder='Enter Zipcode' name='zipcode'
                  value={zipcode} onChange={(e) => setZipcode(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label >Timezone: </label>
                <input type='text' class='form-control' placeholder='Enter Timezone' name='timezone'
                  value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>        
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e)=>
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