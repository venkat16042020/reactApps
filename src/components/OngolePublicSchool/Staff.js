import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StaffServices from '../../services/StaffServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const StaffComponent = () => {
  const [staff, setStaff] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = staff.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(staff.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    StaffServices.getAllStaff().then((response) => {
      setStaff(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Staff</h2>

      <div className="float-right">
        <Link to="/addStaff" className='btn btn-primary mb-2' >Add Staff</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Staff Id</th>
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
              staffMapObj =>
                <tr key={staffMapObj.staffId}>
                  <td>{staffMapObj.staffId}</td>
                  <td>{staffMapObj.firstName}</td>
                  <td>{staffMapObj.lastName}</td>
                  <td>{staffMapObj.gender}</td>
                  <td>{staffMapObj.age}</td>
                  <td>{staffMapObj.address}</td>
                  <td>{staffMapObj.phoneNo}</td>
                  <td>{staffMapObj.emailId}</td>
                 
                  
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateStaff/${staffMapObj.staffId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteStaff/${staffMapObj.staffId}`}>Delete</Link>
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

export default StaffComponent