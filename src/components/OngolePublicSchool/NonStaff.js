import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NonStaffServices from '../../services/NonStaffServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const NonStaffComponent = () => {
  const [nonstaffs, setNonStaff] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = nonstaffs.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(nonstaffs.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    NonStaffServices.getAllNonStaff().then((response) => {
      setNonStaff(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>NonStaff</h2>

      <div className="float-right">
        <Link to="/addNonStaff" className='btn btn-primary mb-2' >Add NonStaff</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>NonStaff Id</th>
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
              nonstaffsMapObj =>
                <tr key={nonstaffsMapObj.nonstaffsId}>
                  <td>{nonstaffsMapObj.nonstaffsId}</td>
                  <td>{nonstaffsMapObj.firstName}</td>
                  <td>{nonstaffsMapObj.lastName}</td>
                  <td>{nonstaffsMapObj.gender}</td>
                  <td>{nonstaffsMapObj.age}</td>
                  <td>{nonstaffsMapObj.address}</td>
                  <td>{nonstaffsMapObj.phoneNo}</td>
                  <td>{nonstaffsMapObj.emailId}</td>
                 
                  
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateNonStaff/${nonstaffsMapObj.nonstaffsId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteNonStaff/${nonstaffsMapObj.nonstaffsId}`}>Delete</Link>
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

export default NonStaffComponent