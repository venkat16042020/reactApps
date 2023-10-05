import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StaffsServices from '../../services/StaffsServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const StaffsComponent = () => {
  const [staffs, setStaffs] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = staffs.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(staffs.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    StaffsServices.getAllStaffs().then((response) => {
      setStaffs(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Staffs</h2>

      <div className="float-right">
        <Link to="/addStaffs" className='btn btn-primary mb-2' >Add Staffs</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Staffs Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Email Id</th>
           
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              staffsMapObj =>
                <tr key={staffsMapObj.staffsId}>
                  <td>{staffsMapObj.staffsId}</td>
                  <td>{staffsMapObj.firstName}</td>
                  <td>{staffsMapObj.lastName}</td>
                  <td>{staffsMapObj.gender}</td>
                  <td>{staffsMapObj.age}</td>
                  <td>{staffsMapObj.address}</td>
                  <td>{staffsMapObj.phoneNo}</td>
                  <td>{staffsMapObj.emailId}</td>
                 
                  
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateStaffs/${staffsMapObj.staffsId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteStaffs/${staffsMapObj.staffsId}`}>Delete</Link>
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
          numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
              <a href='#' className='page-link'
                onClick={() => changeCPage(n)
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
  function perPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

}

export default StaffsComponent