import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import PersonService from '../../services/PersonServices'
import Header from '../Header/Header'

const AddEditPersonComponent = () => {
  const [person_id, setPerson_Id] = useState('')
  const [personFirstName, setPersonFirstName] = useState('')
  const [personMiddleName, setPersonMiddleName] = useState('')
  const [personLastName, setPersonLastName] = useState('')
  const history1 = useNavigate()
  var {personId} = useParams()
  var person = { personId, personFirstName, personLastName, personMiddleName}

const addOrEditPerson = (e)=>{
  e.preventDefault()
  if(personId){
    console.log("Editing person...")
    console.log(person)
    PersonService.updatePerson(personId, person).th(
      (response)=>{
        history1('/persons')
      }
    ).catch(error=>{
      console.log(error)
    })
  }else{
    personId = person_id
    person = {personId, personFirstName, personLastName, personMiddleName}
    console.log(person)
    PersonService.addPerson(person).then(
      (response)=>{
        history1('/persons')
      }
    ).catch(error=>{
      console.log(error)
    })
  }
}

useEffect(()=>{
  PersonService.getPersonById(personId).then((response)=>{
    setPerson_Id(response.data.personId)
    setPersonFirstName(response.data.personFirstName)
    setPersonLastName(response.data.personLastName)
    setPersonMiddleName(response.data.personMiddleName)
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
              <label class='col-sm-4 col-form-label'>PersonId</label>
              <div clas='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter person id'
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
              <label class='col-sm-4 col-form-label'>Person Middle Name</label>
              <div class='col-sm-8'>
                <input type='text' class='form-control'
                placeholder='Enter person middle name'
                name='personMiddleName'
                value={personMiddleName}
                onChange={(e)=> setPersonMiddleName(e.target.value)}>                  
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

export default AddEditPersonComponent