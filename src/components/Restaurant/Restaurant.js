import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PersonServices from '../../services/PersonServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const PersonsComponent = () => {
  const [persons, setPersons] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = persons.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(persons.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  PersonServices.getAllPersons().then((response)=>{
    setPersons(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Persons</h2>

      <div class='col-xs-6' className="float-right">        
                {/* <button className='btn btn-success ms-1' onClick={(e)=>
                addOrEditPerson(e)}>{title()}</button> */}
      <Link to = "/addPerson" className='btn btn-primary mb-2' >Add Person</Link>
              </div>
      <div>
      {/* <h2 className='text-center'>Persons</h2> */}
      {/* <Link to = "/addPerson" className='btn btn-primary mb-2'>Add Person</Link> */}
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Person Id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Dob</th>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Landmark</th>
            <th>Street</th>
            <th>Time Zone</th>
            <th>Zip Code</th>
            <th>Action</th>            
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              personMapObj =>
              <tr key={personMapObj.personId}>
                <td>{personMapObj.personId}</td>
                <td>{personMapObj.personFirstName}</td>
                <td>{personMapObj.personMiddleName}</td>
                <td>{personMapObj.personLastName}</td>
                <td>{personMapObj.dob}</td>
                <td>{personMapObj.country}</td>
                <td>{personMapObj.state}</td>
                <td>{personMapObj.city}</td>
                <td>{personMapObj.landmark}</td>
                <td>{personMapObj.street}</td>
                <td>{personMapObj.timeZone}</td>
                <td>{personMapObj.zipcode}</td>                
                <td>
                  <Link className='btn btn-success ms-1' to={`/updatePerson/${personMapObj.personId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deletePerson/${personMapObj.personId}`}>Delete</Link>
                </td>
                </tr>
            )
          }
        </tbody>
      </table>
      <nav className='pagination'>
        <li className='page-item'>
          <a href='#' className='page-link'
          onClick={perPage} >Prev</a>
        </li>
        {
          numbers.map((n,i) => (
            <li className={`page-item ${currentPage === n ? 'active': ''}`} key={i}>
              <a href='#' className='page-link'
              onClick={()=>changeCPage(n)
              }>{n}</a>
              </li>
          ))
        }
        <li className='page-item'>
          <a href='#' className='page-link'
          onClick={nextPage}>Next</a>
        </li>
      </nav>
    </div>
  )
  function perPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage !== nPage){
      setCurrentPage(currentPage + 1)
    }
  }

}

export default PersonsComponent