import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StudentsServices from '../../services/StudentsServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const StudentsComponent = () => {
  const [students, setStudents] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = students.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(students.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    StudentsServices.getAllStudents().then((response) => {
      setStudents(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Students</h2>

      <div className="float-right">
        <Link to="/addStudents" className='btn btn-primary mb-2' >Add Students</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Students Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              studentsMapObj =>
                <tr key={studentsMapObj.studentsId}>
                  <td>{studentsMapObj.studentsId}</td>
                  <td>{studentsMapObj.firstName}</td>
                  <td>{studentsMapObj.lastName}</td>
                  <td>{studentsMapObj.gender}</td>
                  <td>{studentsMapObj.address}</td>
                  <td>{studentsMapObj.phoneNo}</td>
                  <td>{studentsMapObj.age}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateStudents/${studentsMapObj.studentsId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteStudents/${studentsMapObj.studentsId}`}>Delete</Link>
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

export default StudentsComponent