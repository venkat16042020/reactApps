import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const AdminComponent = () => {
  const [admin, setAdmin] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = admin.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(admin.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    AdminServices.getAllAdmin().then((response) => {
      setAdmin(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Admin</h2>

      <div className="float-right">
        <Link to="/addAdmin" className='btn btn-primary mb-2' >Add Admin</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Admin Id</th>
            <th>Students Id</th>
            <th>Staffs Id</th>
            <th>Non Staffs Id</th>
            <th>Games</th>
            <th>Vehicles</th>
            <th>infrastructure</th>
            <th>Media</th>
            <th>Attendance</th>
            <th>Salaries</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              adminMapObj =>
                <tr key={adminMapObj.adminId}>
                  <td>{adminMapObj.adminId}</td>
                  <td>{adminMapObj.studentsId}</td>
                  <td>{adminMapObj.staffsId}</td>
                  <td>{adminMapObj.nonStaffsId}</td>
                  <td>{adminMapObj.games}</td>
                  <td>{adminMapObj.vehicles}</td>
                  <td>{adminMapObj.infrastructure}</td>
                  <td>{adminMapObj.media}</td>
                  <td>{adminMapObj.attendance}</td>
                  <td>{adminMapObj.salaries}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateAdmin/${adminMapObj.adminId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteAdmin/${adminMapObj.adminId}`}>Delete</Link>
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

export default AdminComponent