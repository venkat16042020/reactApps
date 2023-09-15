import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FeedbackServices from '../../services/FeedbackServices '
import Header from '../Header/Header'
import '../../css/abc.css'

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = feedback.slice(firstIndex, lastIndex)
  const nPage = Math.ceil(feedback.length/recordsPerPage)
  const numbers = [...Array(nPage + 1).keys()].slice(1)
  
useEffect(()=>{
  setCurrentPage(1)
  FeedbackServices.getAllFeedback().then((response)=>{
    setFeedback(response.data)
  }).catch(error =>{
    console.log(error)
  })
}, [])

  return (
    <div className='container'>
      <Header></Header>
      <br></br>
      <h2 className='text-center'>Feedback</h2>

      <div class='col-xs-6' className="float-right">       
      <Link to = "/addFeedback" className='btn btn-primary mb-2' >Add Feedback</Link>
              </div>
      <div>
      </div>
      <table id ='tblkv1'>
        <thead>
          <tr>
            <th>Feedback Id</th>
            <th>Order Id</th>
            <th>Item</th>
            <th>Dine In</th>
            <th>TakeOut</th>
            <th>Day Visited</th>
            <th>Food Quality</th>
            <th>Over All Service Quality</th>
            <th>Cleanliness</th>
            <th>Order Accuracy</th>
            <th>Speed Of Service</th>
            <th>Value</th>
            <th>Over All Experience</th>
            <th>Comment</th>
            <th>Action</th>            
          </tr>
        </thead>
        <tbody>
          {
            records.map(
              feedbackMapObj =>
              <tr key={feedbackMapObj.feedbackId}>
                <td>{feedbackMapObj.feedbackId}</td>
                <td>{feedbackMapObj.orderId}</td>
                <td>{feedbackMapObj.item}</td>
                <td>{feedbackMapObj.dineIn}</td>
                <td>{feedbackMapObj.takeOut}</td>
                <td>{feedbackMapObj.dayVisited}</td>
                <td>{feedbackMapObj.foodQuality}</td>
                <td>{feedbackMapObj.overAllServiceQuality}</td>
                <td>{feedbackMapObj.cleanliness}</td>
                <td>{feedbackMapObj.orderAccuracy}</td>
                <td>{feedbackMapObj.speedOfService}</td>
                <td>{feedbackMapObj.value}</td>                
                <td>{feedbackMapObj.overallExperience}</td>
                <td>{feedbackMapObj.comment}</td>                
                <td>
                  <Link className='btn btn-success ms-1' to={`/updateFeedback/${feedbackMapObj.feedbackId}`}>Update</Link>
                  <Link className='btn btn-danger ms-1' to={`/deleteFeedback/${feedbackMapObj.feedbackId}`}>Delete</Link>
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
          numbers.map((n,i) => (
            <li className={`page-item ${currentPage === n ? 'active': ''}`} key={i}>
              <a href='#' className='page-link'
              onClick={()=>changeCPage(n)
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
  function perPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage !== nPage){
      setCurrentPage(currentPage + 1)
    }
  }

}

export default FeedbackComponent