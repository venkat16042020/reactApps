import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FeedbackServices from '../../services/FeedbackServices '
import Header from '../Header/Header'

const PostPutFeedbackComponent = () => {
  const [feedback_id, setFeedback_Id] = useState('')
  const [orderId, setOrderId] = useState('')
  const [item, setItem] = useState('')
  const [dineIn, setDineIn] = useState('')
  const [takeOut, setTakeOut] = useState('')
  const [dayVisited, setDayVisited] = useState('')
  const [foodQuality, setFoodQuality] = useState('')
  const [overAllServiceQuality, setOverAllServiceQuality] = useState('')
  const [cleanliness, setCleanliness] = useState('')
  const [orderAccuracy, setOrderAccuracy] = useState('')
  const [speedOfService, setSpeedOfService] = useState('')
  const [value, setValue] = useState('')
  const [overAllExperience, setOverAllExperience] = useState('')
  const [comment, setComment] = useState('')

  const history1 = useNavigate()
  var {feedbackId} = useParams()
  var feedback = { feedbackId, orderId, item, dineIn, takeOut, dayVisited, foodQuality, overAllServiceQuality, cleanliness, orderAccuracy, speedOfService, value, overAllExperience, comment}

const addOrEditFeedback = (e)=>{
  e.preventDefault()
  if(feedbackId){
    console.log("Editing feedback...")
    console.log(feedbackId)
    console.log(feedback)
    FeedbackServices.updateFeedback(feedbackId, feedback).then(
      (response)=>{
        history1('/feedback')
      }
    ).catch(error=>{
      console.log(error)
    })
  }else{
    feedbackId = feedback_id
    feedback = {feedbackId, orderId, item, dineIn, takeOut, dayVisited, foodQuality, overAllServiceQuality, cleanliness, orderAccuracy, speedOfService, value, overAllExperience, comment}
    console.log(feedback)
    FeedbackServices.addFeedback(feedback).then(
      (response)=>{
        history1('/feedbacks')
      }
    ).catch(error=>{
      console.log(error)
    })
  }
}

useEffect(()=>{
  FeedbackServices.getFeedbackById(feedbackId).then((response)=>{
    setFeedback_Id(response.data.feedbackId)
    setOrderId(response.data.orderId)
    setItem(response.data.item)
    setDineIn(response.data.dineIn)
    setTakeOut(response.data.takeOut)
    setDayVisited(response.data.dayVisited)
    setFoodQuality(response.data.foodQuality)
    setOverAllServiceQuality(response.data.overAllServiceQuality)
    setCleanliness(response.data.cleanliness)
    setOrderAccuracy(response.data.orderAccuracy)
    setSpeedOfService(response.data.speedOfService)
    setValue(response.data.value)
    setOverAllExperience(response.data.overAllExperience)
    setComment(response.data.comment)
    
  }).catch(error =>{
    console.log(error)
  })
}, [])

const title = () =>{
  if(feedbackId){
    return "Update Feedback"
  }else{
    return "Add Feedback"
  }
}

  return (
    <div>
      <Header></Header>
      <br></br>
      <div className='row'></div>
      <div className='card col-md-6 offset-md-3'>
        <br></br>
        <h3 className='text-center'>{title()}</h3>
        <div className='card-body'>
          <form> 
          <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Feedback Id:</label>
                <input type='text' class='form-control' placeholder='Enter Feedback Id' name='feedback_id'
                  value={feedback_id} onChange={(e) => setFeedback_Id(e.target.value)}>
                </input>
              </div>       
          <div class="col-3">
                <label for="text">Order Id:</label>
                <input type='text' class='form-control' placeholder='Enter Order Id' name='orderId'
                  value={orderId} onChange={(e) => setOrderId(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Feedback Item:</label>
                <input type='text' class='form-control' placeholder='Enter Item' name='item'
                  value={item} onChange={(e) => setItem(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Dine In:</label>
                <input type='text' class='form-control' placeholder='Enter Dine In' name='dineIn'
                  value={dineIn} onChange={(e) => setDineIn(e.target.value)}>
                </input>
              </div>
            </div>
            <div class="row mt-3 mb-3">
            <div class="col-3">
                <label for="text">Take Out: </label>
                <input type='text' class='form-control' placeholder='Take Out' name='takeOut'
                  value={takeOut} onChange={(e) => setTakeOut(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Day Visited:</label>
                <input type='text' class='form-control' placeholder='Day Visited' name='dayVisited'
                  value={dayVisited} onChange={(e) => setDayVisited(e.target.value)}>
                </input>
              </div>
            <div class="col-3">
                <label for="text">Food Quality:</label>
                <input type='text' class='form-control' placeholder='Enter Food Quality' name='foodQuality'
                  value={foodQuality} onChange={(e) => setFoodQuality(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Over All Service Quality: </label>
                <input type='text' class='form-control' placeholder='Over All Service Quality' name='overAllServiceQuality'
                  value={overAllServiceQuality} onChange={(e) => setOverAllServiceQuality(e.target.value)}>
                </input>
              </div>
            </div>   
            <div class='mb-3 row'>
            <div class="col-3">
                <label for="text">Cleanliness: </label>
                <input type='text' class='form-control' placeholder='Cleanliness' name='cleanliness'
                  value={cleanliness} onChange={(e) => setCleanliness(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label for="text">Order Accuracy: </label>
                <input type='text' class='form-control' placeholder='Order Accuracy' name='orderAccuracy'
                  value={orderAccuracy} onChange={(e) => setOrderAccuracy(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label >Speed Of Service: </label>
                <input type='text' class='form-control' placeholder='Enter Speed Of Service' name='speedOfService'
                  value={speedOfService} onChange={(e) => setSpeedOfService(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label >Value: </label>
                <input type='text' class='form-control' placeholder='Enter Value' name='value'
                  value={value} onChange={(e) => setValue(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label >Over All Experience: </label>
                <input type='text' class='form-control' placeholder='Enter Over all Experience' name='overAllExperience'
                  value={overAllExperience} onChange={(e) => setOverAllExperience(e.target.value)}>
                </input>
              </div>
              <div class="col-3">
                <label >Comment: </label>
                <input type='text' class='form-control' placeholder='Enter Comment' name='comment'
                  value={comment} onChange={(e) => setComment(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>        
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e)=>
                addOrEditFeedback(e)}>{title()}</button>
                <Link to="/feedback" className='btn btn-danger ms-1'>Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutFeedbackComponent