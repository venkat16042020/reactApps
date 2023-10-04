import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AttendanceServices from '../../services/AttendanceServices'
import Header from '../Header/Header'

const PostPutAttendanceComponent = () => {
  const [attendance_Id, setAttendance_Id] = useState('')
  const [students, setStudents] = useState('')
  const [staffs, setstaffs] = useState('')
  const [nonStaffs, setnonStaffs] = useState('')
  const [gender, setgender] = useState('')
  const [date, setdate] = useState('')
  
  const history1 = useNavigate()
  var { attendanceId } = useParams()
  var attendance = { attendanceId, students, staffs, nonStaffs, gender, date}

  const addOrEditAttendance = (e) => {
    e.preventDefault()
    if (attendanceId) {
    console.log("Editing attendance...")
    console.log(attendanceId)
    console.log(attendance)
      AttendanceServices.updateAttendance(attendanceId, attendance).then(
        (response) => {
          history1('/attendance')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      attendanceId = attendance_Id
      attendance = { attendanceId, students, staffs, nonStaffs, gender, date}
      console.log(attendance)
      AttendanceServices.addAttendance(attendance).then(
        (response) => {
          history1('/attendance')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (attendanceId) {
      AttendanceServices.getAttendanceByAttendanceId(attendanceId).then((response) => {
        setAttendance_Id(response.data.attendanceId)
        setStudents(response.data.students)
        setstaffs(response.data.staffs)
        setnonStaffs(response.data.nonStaffs)
        setgender(response.data.gender)
        setdate(response.data.date)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (attendanceId) {
      return "Update Attendance"
    } else {
      return "Add Attendance"
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
                <label for="text">*Attendance Id:</label>
                <input type='text' class='form-control' placeholder='Enter Attendance Id' name='attendanceId'
                  value={attendanceId} onChange={(e) => setAttendance_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Students:</label>
                <input type='text' class='form-control' placeholder='Students ' name='students'
                  value={students} onChange={(e) => setStudents(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Staffs :</label>
                <input type='text' class='form-control' placeholder='Staffs ' name='staffs'
                  value={staffs} onChange={(e) => setstaffs(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Non Staffs :</label>
                <input type='text' class='form-control' placeholder='Non Staffs ' name='nonstaffs'
                  value={nonStaffs} onChange={(e) => setnonStaffs(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Gender:</label>
                <input type='text' class='form-control' placeholder='Gender' name='gender'
                  value={gender} onChange={(e) => setgender(e.target.value)}>
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
                  addOrEditAttendance(e)}>{title()}</button>
                <Link to="/attendance" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/attendance" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutAttendanceComponent