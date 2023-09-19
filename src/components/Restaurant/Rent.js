import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RentServices from '../../services/RentServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const RentComponent = () => {
  const [rent, setRent] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = rent.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(rent.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  RentServices.getAllRent().then((response)=>{
    setRent(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Rent</h2>

      <div class='col-xs-6' className="float-right">      
      <Link to = "/addRent" className='btn btn-primary mb-2' >Add Rent</Link>
              </div>
      <div>
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Rent Id</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Advanced</th>
            <th>Year</th>
            <th>Date</th>   
            <th>Action</th>     
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              rentMapObj =>
              <tr key={rentMapObj.rentId}>
                <td>{rentMapObj.rentId}</td>
                <td>{rentMapObj.address}</td>
                <td>{rentMapObj.amount}</td>
                <td>{rentMapObj.advanced}</td>
                <td>{rentMapObj.year}</td>
                <td>{rentMapObj.date}</td>               
                <td>
                  <Link className='btn btn-success ms-1' to={`/updateRent/${rentMapObj.rentId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteRent/${rentMapObj.rentId}`}>Delete</Link>
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

export default RentComponent