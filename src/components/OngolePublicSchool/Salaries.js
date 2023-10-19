import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SalariesServices from '../../services/SalariesServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const SalariesComponent = () => {
  const [salaries, setSalaries] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = salaries.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(salaries.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    SalariesServices.getAllSalaries().then((response) => {
      setSalaries(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Salaries</h2>

      <div className="float-right">
        <Link to="/addSalaries" className='btn btn-primary mb-2' >Add Salaries</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Salaries Id</th>
            <th>Date</th>
            <th>Staffs Sal</th>
            <th>Non Staffs Sal</th>
            <th>Pf</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              salariesMapObj =>
                <tr key={salariesMapObj.salariesId}>
                  <td>{salariesMapObj.salariesId}</td>
                  <td>{salariesMapObj.date}</td>
                  <td>{salariesMapObj.staffsSal}</td>
                  <td>{salariesMapObj.staffsSal}</td>
                  <td>{salariesMapObj.pf}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateSalaries/${salariesMapObj.salariesId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteSalaries/${salariesMapObj.salariesId}`}>Delete</Link>
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

export default SalariesComponent