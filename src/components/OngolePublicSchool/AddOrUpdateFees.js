import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import FeesServices from '../../services/FeesServices'
import Header from '../Header/Header'

const PostPutFeesComponent = () => {
  const [fees_Id, setFees_Id] = useState('')
  const [studentsFees, setstudentsFees] = useState('')
  const [booksFees, setbooksFees] = useState('')
  const [gamesFees, setgamesFees] = useState('')
  const [dressFees, setdressFees] = useState('')
  const [tuitionFees, settuitionFees] = useState('')
  const [date, setdate] = useState('')
  const history1 = useNavigate()
  var { feesId } = useParams()
  var fees = { feesId, studentsFees, booksFees, gamesFees, dressFees, tuitionFees, date}

  const addOrEditFees = (e) => {
    e.preventDefault()
    if (feesId) {
    console.log("Editing fees...")
    console.log(feesId)
    console.log(fees)
      FeesServices.updateFees(feesId, fees).then(
        (response) => {
          history1('/fees')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      feesId = fees_Id
      fees = { feesId,studentsFees, booksFees, gamesFees, dressFees, tuitionFees }
      console.log(fees)
      FeesServices.addFees(fees).then(
        (response) => {
          history1('/fees')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (feesId) {
      FeesServices.getFeesByFeesId(feesId).then((response) => {
        setFees_Id(response.data.feesId)
        setstudentsFees(response.data.studentsFees)
        setbooksFees(response.data.booksFees)
        setgamesFees(response.data.gamesFees)
        setdressFees(response.data.dressFees)
        settuitionFees(response.data.tuitionFees)
        setdate(response.data.date)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (feesId) {
      return "Update Fees"
    } else {
      return "Add Fees"
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
                <label for="text">*Fees Id:</label>
                <input type='text' class='form-control' placeholder='Enter Fees Id' name='feesId'
                  value={feesId} onChange={(e) => setFees_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Students Fees:</label>
                <input type='text' class='form-control' placeholder='Students Fees' name='studentsFees'
                  value={studentsFees} onChange={(e) => setstudentsFees(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Books Fees:</label>
                <input type='text' class='form-control' placeholder='Books Fees' name='booksFees'
                  value={booksFees} onChange={(e) => setbooksFees(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Games Fees:</label>
                <input type='text' class='form-control' placeholder='Games Fees' name='gamesFees'
                  value={gamesFees} onChange={(e) => setgamesFees(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Dress Fees:</label>
                <input type='text' class='form-control' placeholder='Dress Fees' name='dressFees'
                  value={dressFees} onChange={(e) => setdressFees(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Tuition Fees:</label>
                <input type='text' class='form-control' placeholder='Tuition Fees' name='tuitionFees'
                  value={tuitionFees} onChange={(e) => settuitionFees(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Date:</label>
                <input type='text' class='form-control' placeholder='Date' name='date'
                  value={date} onChange={(e) => setdate(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditFees(e)}>{title()}</button>
                <Link to="/fees" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/fees" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutFeesComponent