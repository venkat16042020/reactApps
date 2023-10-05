import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ClassesServices from '../../services/ClassesServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const ClassesComponent = () => {
  const [classes, setClasses] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = classes.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(classes.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    ClassesServices.getAllClasses().then((response) => {
      setClasses(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Classes</h2>

      <div className="float-right">
        <Link to="/addClasses" className='btn btn-primary mb-2' >Add Classes</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Classes Id</th>
            <th>U Kg</th>
            <th>L Kg</th>
            <th>First Class</th>
            <th>Second Class</th>
            <th>Third Class</th>
            <th>Fourth Class</th>
            <th>Fifth Class</th>
            <th>Sixth Class</th>
            <th>Seventh Class</th>
            <th>Eight Class</th>
            <th>Ninth Class</th>
            <th>Tenth Class</th>
           
           
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              classesMapObj =>
                <tr key={classesMapObj.classesId}>
                  <td>{classesMapObj.classesId}</td>
                  <td>{classesMapObj.uKg}</td>
                  <td>{classesMapObj.lKg}</td>
                  <td>{classesMapObj.firstClass}</td>
                  <td>{classesMapObj.secondClass}</td>
                  <td>{classesMapObj.thirdClass}</td>
                  <td>{classesMapObj.fourthClass}</td>
                  <td>{classesMapObj.fifthClass}</td>
                  <td>{classesMapObj.sixthClass}</td>
                  <td>{classesMapObj.seventhClass}</td>
                  <td>{classesMapObj.eightClass}</td>
                  <td>{classesMapObj.ninthClass}</td>
                  <td>{classesMapObj.tenthClass}</td>
                 
                 
                  
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateClasses/${classesMapObj.classesId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteClasses/${classesMapObj.classesId}`}>Delete</Link>
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

export default ClassesComponent