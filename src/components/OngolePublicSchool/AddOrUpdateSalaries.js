import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SalariesServices from '../../services/SalariesServices'
import Header from '../Header/Header'

const PostPutSalariesComponent = () => {
  const [salaries_Id, setSalaries_Id] = useState('')
  const [date, setdate] = useState('')
  const [staffsSal, setstaffsSal] = useState('')
  const [nonStaffsSal, setnonStaffsSal] = useState('')
  const [pf, setpf] = useState('')
  const history1 = useNavigate()
  var { salariesId } = useParams()
  var salaries = { salariesId, date, staffsSal, nonStaffsSal, pf}

  const addOrEditSalaries = (e) => {
    e.preventDefault()
    if (salariesId) {
    console.log("Editing salaries...")
    console.log(salariesId)
    console.log(salaries)
      SalariesServices.updateSalaries(salariesId, salaries).then(
        (response) => {
          history1('/salaries')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      salariesId = salaries_Id
      salaries = { salariesId, date, staffsSal, nonStaffsSal, pf }
      console.log(salaries)
      SalariesServices.addSalaries(salaries).then(
        (response) => {
          history1('/salaries')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (salariesId) {
      SalariesServices.getSalariesBySalariesId(salariesId).then((response) => {
        setSalaries_Id(response.data.salariesId)
        setdate(response.data.date)
        setstaffsSal(response.data.staffsSal)
        setnonStaffsSal(response.data.nonstaffsSal)
        setpf(response.data.pf)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (salariesId) {
      return "Update Salaries"
    } else {
      return "Add Salaries"
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
                <label for="text">*Salaries Id:</label>
                <input type='text' class='form-control' placeholder='Enter Salaries Id' name='salariesId'
                  value={salariesId} onChange={(e) => setSalaries_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Date:</label>
                <input type='text' class='form-control' placeholder='Date' name='date'
                  value={date} onChange={(e) => setdate(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Staffs Sal:</label>
                <input type='text' class='form-control' placeholder='Staffs Sal' name='staffsSal'
                  value={staffsSal} onChange={(e) => setstaffsSal(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Non Staffs Sal:</label>
                <input type='text' class='form-control' placeholder='Non Staffs Sal' name='nonstaffsSal'
                  value={nonStaffsSal} onChange={(e) => setnonStaffsSal(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Pf:</label>
                <input type='text' class='form-control' placeholder='Pf' name='pf'
                  value={pf} onChange={(e) => setpf(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditSalaries(e)}>{title()}</button>
                <Link to="/salaries" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/salaries" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutSalariesComponent