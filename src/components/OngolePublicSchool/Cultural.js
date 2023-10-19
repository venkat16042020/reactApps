import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CulturalServices from '../../services/CulturalServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const CulturalComponent = () => {
  const [cultural, setCultural] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = cultural.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(cultural.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    CulturalServices.getAllCultural().then((response) => {
      setCultural(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Cultural</h2>

      <div className="float-right">
        <Link to="/addCultural" className='btn btn-primary mb-2' >Add Cultural</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Cultural Id</th>
            <th>Ventriloquy</th>
            <th>Mime</th>
            <th>Live Art</th>
            <th>Stand Up Comedy</th>
            <th>Classical Instrumental Music</th>
            <th>ACapella</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {
            records.map(
              culturalMapObj =>
                <tr key={culturalMapObj.culturalId}>
                  <td>{culturalMapObj.culturalId}</td>
                  <td>{culturalMapObj.ventriloquy}</td>
                  <td>{culturalMapObj.mime}</td>
                  <td>{culturalMapObj.liveArt}</td>
                  <td>{culturalMapObj.standUpComedy}</td>
                  <td>{culturalMapObj.classicalInstrumentalMusic}</td>
                  <td>{culturalMapObj.aCapella}</td>
                  <td>{culturalMapObj.date}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateCultural/${culturalMapObj.culturalId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteCultural/${culturalMapObj.culturalId}`}>Delete</Link>
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

export default CulturalComponent