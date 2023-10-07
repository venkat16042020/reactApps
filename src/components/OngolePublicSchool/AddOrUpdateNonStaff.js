import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import NonStaffServices from '../../services/NonStaffServices'
import Header from '../Header/Header'
import React, { useEffect, useState } from 'react'

const PostPutNonStaffComponent = () => {
  const [nonStaff_Id, setNonStaff_Id] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [emailId, setEmailId] = useState('')
  
  const history1 = useNavigate()
  var { nonStaffId } = useParams()
  var nonStaff = { nonStaff_Id, firstName, lastName, gender, age, address, phoneNo, emailId  }

  const addOrEditNonStaff = (e) => {
    e.preventDefault()
    if (nonStaffId) {
    console.log("Editing nonStaff...")
    console.log(nonStaffId)
    console.log(nonStaff)
      NonStaffServices.updateNonStaff(nonStaffId, nonStaff).then(
        (response) => {
          history1('/nonStaff')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      nonStaffId = nonStaff_Id
      nonStaff = { nonStaff_Id, firstName, lastName,gender, age, address, phoneNo, emailId  }
      console.log(nonStaff)
      NonStaffServices.addNonStaff(nonStaff).then(
        (response) => {
          history1('/nonStaff')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (nonStaffId) {
      NonStaffServices.getNonStaffByNonStaffId(nonStaffId).then((response) => {
        setNonStaff_Id(response.data.nonStaff_Id)
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
    if (nonStaffId) {
      return "Update NonStaff"
    } else {
      return "Add NonStaff"
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
                <label for="text">*NonStaff Id:</label>
                <input type='text' class='form-control' placeholder='Enter NonStaff Id' name='nonStaffId'
                  value={nonStaffId} onChange={(e) => setNonStaff_Id(e.target.value)}>
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
                  addOrEditNonStaff(e)}>{title()}</button>
                <Link to="/nonStaff" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/nonStaff" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutNonStaffComponent