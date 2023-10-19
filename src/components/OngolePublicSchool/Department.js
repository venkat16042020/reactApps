import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DepartmentServices from '../../services/DepartmentServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const DepartmentComponent = () => {
  const [department, setDepartment] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = department.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(department.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    DepartmentServices.getAllDepartment().then((response) => {
      setDepartment(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Department</h2>

      <div className="float-right">
        <Link to="/addDepartment" className='btn btn-primary mb-2' >Add Department</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Department Id</th>
            <th>English Dep</th>
            <th>Telugu Dep</th>
            <th>Hindi Dep</th>
            <th>Maths Dep</th>
            <th>Science Dep</th>
            <th>Social Dep</th>
         </tr>
        </thead>
        <tbody>
          {
            records.map(
              departmentMapObj =>
                <tr key={departmentMapObj.departmentId}>
                  <td>{departmentMapObj.departmentId}</td>
                  <td>{departmentMapObj.englishDep}</td>
                  <td>{departmentMapObj.teluguDep}</td>
                  <td>{departmentMapObj.hindiDep}</td>
                  <td>{departmentMapObj.mathsDep}</td>
                  <td>{departmentMapObj.scienceDep}</td>
                  <td>{departmentMapObj.socialDep}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateDepartment/${departmentMapObj.departmentId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteDepartment/${departmentMapObj.departmentId}`}>Delete</Link>
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

export default DepartmentComponent