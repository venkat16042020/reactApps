import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PersonService from '../../services/PersonServices'
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
  PersonService.getAllPersons().then((response)=>{
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
      <Link to = "/persons" className='btn btn-primary mb-2'>Add Person</Link>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>PersonId</th>
            <th>personFirstName</th>
            <th>personLastName</th>
            <th>personMiddleName</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              personMapObj =>
              <tr key={personMapObj.personId}>
                <td>{personMapObj.personId}</td>
                <td>{personMapObj.personFirstName}</td>
                <td>{personMapObj.personLastName}</td>
                <td>{personMapObj.personMiddleName}</td>
                <td>
                  <Link className='btn btn-outline-primary ms-1' to={`/updatedPerson/${personMapObj.personId}`}>Edit</Link>
                  <Link className='btn btn-outline-primary ms-1' to={`/deletePerson/${personMapObj.personId}`}>Delete</Link>
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