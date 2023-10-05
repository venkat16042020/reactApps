import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import NonStaffsServices from '../../services/NonStaffsServices'
import Header from '../Header/Header'

const PostPutNonStaffsComponent = () => {
  const [nonStaffs_Id, setNonStaffs_Id] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [emailId, setEmailId] = useState('')
  
  const history1 = useNavigate()
  var { nonStaffsId } = useParams()
  var nonStaffs = { nonStaffsId, firstName, lastName, gender, age, address, phoneNo, emailId  }

  const addOrEditNonStaffs = (e) => {
    e.preventDefault()
    if (nonStaffsId) {
    console.log("Editing nonStaffs...")
    console.log(nonStaffsId)
    console.log(nonStaffs)
      NonStaffsServices.updateNonStaffs(nonStaffsId, nonStaffs).then(
        (response) => {
          history1('/nonStaffs')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      nonStaffsId = nonStaffs_Id
      nonStaffs = { nonStaffsId, firstName, lastName,gender, age, address, phoneNo, emailId  }
      console.log(nonStaffs)
      NonStaffsServices.addNonStaffs(nonStaffs).then(
        (response) => {
          history1('/nonStaffs')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (nonStaffsId) {
      NonStaffsServices.getNonStaffsByNonStaffsId(nonStaffsId).then((response) => {
        setNonStaffs_Id(response.data.nonStaffsId)
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
    if (nonStaffsId) {
      return "Update NonStaffs"
    } else {
      return "Add NonStaffs"
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
                <label for="text">*NonStaffs Id:</label>
                <input type='text' class='form-control' placeholder='Enter NonStaffs Id' name='nonStaffsId'
                  value={nonStaffsId} onChange={(e) => setNonStaffs_Id(e.target.value)}>
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
                  addOrEditNonStaffs(e)}>{title()}</button>
                <Link to="/nonStaffs" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/nonStaffs" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutNonStaffsComponent