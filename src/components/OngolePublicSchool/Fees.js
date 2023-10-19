import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FeesServices from '../../services/FeesServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const FeesComponent = () => {
  const [fees, setFees] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = fees.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(fees.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    FeesServices.getAllFees().then((response) => {
      setFees(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Fees</h2>

      <div className="float-right">
        <Link to="/addFees" className='btn btn-primary mb-2' >Add Fees</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Fees Id</th>
            <th>Students Fees</th>
            <th>Books Fees</th>
            <th>Games Fees</th>
            <th>Dress Fees</th>
            <th>Tuition Fees</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              feesMapObj =>
                <tr key={feesMapObj.feesId}>
                  <td>{feesMapObj.feesId}</td>
                  <td>{feesMapObj.studentsFees}</td>
                  <td>{feesMapObj.booksFees}</td>
                  <td>{feesMapObj.gamesFees}</td>
                  <td>{feesMapObj.dressFees}</td>
                  <td>{feesMapObj.tuitionFees}</td>
                  <td>{feesMapObj.date}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateFees/${feesMapObj.feesId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteFees/${feesMapObj.feesId}`}>Delete</Link>
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

export default FeesComponent