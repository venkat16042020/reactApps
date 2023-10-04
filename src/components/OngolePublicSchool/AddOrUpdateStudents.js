import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import StudentsServices from '../../services/StudentsServices'
import Header from '../Header/Header'

const PostPutStudentsComponent = () => {
  const [students_Id, setStudents_Id] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [age, setAge] = useState('')
  
  const history1 = useNavigate()
  var { studentsId } = useParams()
  var students = { studentsId, firstName, lastName, gender, address, phoneNo, age }

  const addOrEditStudents = (e) => {
    e.preventDefault()
    if (studentsId) {
    console.log("Editing students...")
    console.log(studentsId)
    console.log(students)
      StudentsServices.updateStudents(studentsId, students).then(
        (response) => {
          history1('/students')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      studentsId = students_Id
      students = { studentsId, firstName, lastName, gender, address, phoneNo, age }
      console.log(students)
      StudentsServices.addStudents(students).then(
        (response) => {
          history1('/students')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (studentsId) {
      StudentsServices.getStudentsByStudentsId(studentsId).then((response) => {
        setStudents_Id(response.data.studentsId)
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setGender(response.data.gender)
        setAddress(response.data.address)
        setPhoneNo(response.data.phoneNo)
        setAge(response.data.age)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (studentsId) {
      return "Update Students"
    } else {
      return "Add Students"
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
                <label for="text">*Students Id:</label>
                <input type='text' class='form-control' placeholder='Enter Students Id' name='studentsId'
                  value={studentsId} onChange={(e) => setStudents_Id(e.target.value)}>
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
                <label for="text">*Age:</label>
                <input type='text' class='form-control' placeholder='Age' name='age'
                  value={age} onChange={(e) => setAge(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditStudents(e)}>{title()}</button>
                <Link to="/students" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/students" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutStudentsComponent