import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MediaServices from '../../services/MediaServices'
import Header from '../Header/Header'
import '../../css/abc.css'

const MediaComponent = () => {
  const [media, setMedia] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = media.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(media.length / recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  useEffect(() => {
    setCurrentPage(1)
    MediaServices.getAllMedia().then((response) => {
      setMedia(response.data)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Media</h2>

      <div className="float-right">
        <Link to="/addMedia" className='btn btn-primary mb-2' >Add Media</Link>
      </div>
      <div>
      </div>
      <table id='tblkv1'>
        <thead>
          <tr>
            <th>Media Id</th>
            <th>Twitter</th>
            <th>Facebook</th>
            <th>YouTube</th>
            <th>Tv9</th>
            <th>Etv</th>
            <th>V6News</th>
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              mediaMapObj =>
                <tr key={mediaMapObj.mediaId}>
                  <td>{mediaMapObj.mediaId}</td>
                  <td>{mediaMapObj.twitter}</td>
                  <td>{mediaMapObj.facebook}</td>
                  <td>{mediaMapObj.youTube}</td>
                  <td>{mediaMapObj.tv9}</td>
                  <td>{mediaMapObj.etv}</td>
                  <td>{mediaMapObj.v6News}</td>
                  <td>
                    <Link className='btn btn-success ms-1' to={`/updateMedia/${mediaMapObj.mediaId}`}>Update</Link>
                    <Link className='btn btn-danger ms-1' to={`/deleteMedia/${mediaMapObj.mediaId}`}>Delete</Link>
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

export default MediaComponent