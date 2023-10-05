import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import StaffsServices from '../../services/StaffsServices'
import Header from '../Header/Header'

const PostPutStaffsComponent = () => {
  const [staffs_Id, setStaffs_Id] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [emailId, setEmailId] = useState('')
  
  const history1 = useNavigate()
  var { staffsId } = useParams()
  var staffs = { staffsId, firstName, lastName, gender, age, address, phoneNo, emailId  }

  const addOrEditStaffs = (e) => {
    e.preventDefault()
    if (staffsId) {
    console.log("Editing staffs...")
    console.log(staffsId)
    console.log(staffs)
      StaffsServices.updateStaffs(staffsId, staffs).then(
        (response) => {
          history1('/staffs')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      staffsId = staffs_Id
      staffs = { staffsId, firstName, lastName,gender, age, address, phoneNo, emailId  }
      console.log(staffs)
      StaffsServices.addStaffs(staffs).then(
        (response) => {
          history1('/staffs')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (staffsId) {
      StaffsServices.getStaffsByStaffsId(staffsId).then((response) => {
        setStaffs_Id(response.data.staffsId)
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setGender(response.data.gender)
        setAge(response.data.age)
        setAddress(response.data.address)
        setPhoneNo(response.data.phoneNo)
        setEmailId(response.data.emailId)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (staffsId) {
      return "Update Staffs"
    } else {
      return "Add Staffs"
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
                <label for="text">*Staffs Id:</label>
                <input type='text' class='form-control' placeholder='Enter Staffs Id' name='staffsId'
                  value={staffsId} onChange={(e) => setStaffs_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*First Name:</label>
                <input type='text' class='form-control' placeholder='First Name' name='firstName'
                  value={firstName} onChange={(e) => setFirstName(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Last Name:</label>
                <input type='text' class='form-control' placeholder='Last Name' name='lastName'
                  value={lastName} onChange={(e) => setLastName(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Gender:</label>
                <input type='text' class='form-control' placeholder='Gender' name='gender'
                  value={gender} onChange={(e) => setGender(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Age:</label>
                <input type='text' class='form-control' placeholder='Age' name='age'
                  value={age} onChange={(e) => setAge(e.target.value)}>
                    </input>
                </div>
                <div class="col-3">
                <label for="text">*Address:</label>
                <input type='text' class='form-control' placeholder='Address' name='address'
                  value={address} onChange={(e) => setAddress(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Phone No:</label>
                <input type='text' class='form-control' placeholder='Phone No' name='phoneNo'
                  value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)}>
                </input>             
                  </div>
                <div class="col-3">
                <label for="text">*Email Id:</label>
                <input type='text' class='form-control' placeholder='Email Id' name='emailId'
                  value={emailId} onChange={(e) => setEmailId(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditStaffs(e)}>{title()}</button>
                <Link to="/staffs" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/staffs" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutStaffsComponent