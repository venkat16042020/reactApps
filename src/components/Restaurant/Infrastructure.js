import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InfrastructureServices from '../../services/InfrastructureServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const InfrastructureComponent = () => {
  const [infrastructure, setInfrastructure] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = infrastructure.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(infrastructure.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  InfrastructureServices.getAllInfrastructure().then((response)=>{
    setInfrastructure(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Infrastructure</h2>

      <div class='col-xs-6' className="float-right">      
      <Link to = "/addInfrastructureItem" className='btn btn-primary mb-2' >Add InfrastructureItem</Link>
              </div>
      <div>
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Tables</th>
            <th>Lights</th>           
            <th>Fans</th>
            <th>Ac</th>
            <th>Cost</th>
            <th>Number of Items Available</th>
            <th>Date</th>   
            <th>Action</th>     
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              infrastructureItemMapObj =>
              <tr key={infrastructureItemMapObj.itemId}>
                <td>{infrastructureItemMapObj.itemId}</td>
                <td>{infrastructureItemMapObj.tables}</td>
                <td>{infrastructureItemMapObj.lights}</td>
                <td>{infrastructureItemMapObj.fans}</td>
                <td>{infrastructureItemMapObj.ac}</td>              
                <td>{infrastructureItemMapObj.cost}</td>
                <td>{infrastructureItemMapObj.numberOfItemsAvailable}</td>
                <td>{infrastructureItemMapObj.date}</td>               
                <td>
                  <Link className='btn btn-success ms-1' to={`/updateInfrastructure/${infrastructureItemMapObj.itemId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteInfrastructure/${infrastructureItemMapObj.itemId}`}>Delete</Link>
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

export default InfrastructureComponent