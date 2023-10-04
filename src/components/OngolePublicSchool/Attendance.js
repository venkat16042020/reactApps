import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AttendanceServices from '../../services/AttendanceServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const AttendanceComponent = () => {
  const [attendance, setAttendance] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = attendance.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(attendance.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    AttendanceServices.getAllAttendance().then((response) => {
      setAttendance(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Attendance</h2>

      <div className="float-right">
        <Link to="/addAttendance" className='btn btn-primary mb-2' >Add Attendance</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Attendance Id</th>
            <th>Students</th>
            <th>Staffs</th>
            <th>Non Staffs</th>
            <th>gender</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              attendanceMapObj =>
                <tr key={attendanceMapObj.attendanceId}>
                  <td>{attendanceMapObj.attendanceId}</td>
                  <td>{attendanceMapObj.students}</td>
                  <td>{attendanceMapObj.staffs}</td>
                  <td>{attendanceMapObj.nonStaffs}</td>
                  <td>{attendanceMapObj.gender}</td>
                  <td>{attendanceMapObj.date}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateAttendance/${attendanceMapObj.attendanceId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteAttendance/${attendanceMapObj.attendanceId}`}>Delete</Link>
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

export default AttendanceComponent