import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import AdminServices from '../../services/AdminServices'
import Header from '../Header/Header'
import { getCurrentDate } from '../KlnReactLibs/KLN_Lib'
const PostPutAdminComponent = () => {
  const [adminId, setAdminId] = useState('')
  const [studentsId, SetStudentsId] = useState('')
  const [staffsId, setstaffsId] = useState('')
  const [nonStaffsId, setnonStaffsId] = useState('')
  const [games, setgames] = useState('')
  const [vehicles, setvehicles] = useState('')
  const [infrastructure, setinfrastructure] = useState('')
  const [media, setmedia] = useState('')
  const [attendance, setattendance] = useState('')
  const [salaries, setsalaries] = useState('')
  const history1 = useNavigate()
  var { itemId } = useParams()
  var admin = { adminId, studentsId, staffsId, nonStaffsId, games, vehicles, infrastructure, infrastructure, media, attendance, salaries}
  function handleCost(target) {
    setCost(parseFloat(target))
    setTotalGst(parseFloat(centralGst) + parseFloat(stateGst))
    setTotalCost(parseFloat(target) + (parseFloat(target) * parseFloat(totalGst) / 100))
  }

  function handleCGst(target) {
    setCentralGst(parseFloat(target))
    setTotalGst(parseFloat(target) + parseFloat(stateGst))
    setTotalCost(parseFloat(cost) + (parseFloat(cost) * parseFloat(totalGst) / 100))
  }

  function handleSGst(target) {
    setStateGst(parseFloat(target))
    setTotalGst(parseFloat(target) + parseFloat(centralGst))
    setTotalCost(parseFloat(cost) + (parseFloat(cost) * (totalGst / 100)))
  }

  const clearAdmin = () => {
    document.getElementById("adminId").reset();
  }

  const addOrEditAdmin = (e) => {
    e.preventDefault()
    if (adminId) {
      AdminServices.updateAdmin(adminId, admin).then(
        (response) => {
          history1('/admins')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      setDate(getCurrentDate())
      adminId = admin_Id
      admin = { adminId, studentsId, staffsId, nonStaffsId, games, vehicles, infrastructure, infrastructure, media, attendance, salaries }
      console.log(admin)
      AdminServices.addAdmin(admin).then(
        (response) => {
          history1('/admins')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (adminId) {
      AdminServices.getAdminByAdminId(adminId).then((response) => {
        setAdminId(response.data.adminId)
        setstudentsId(response.data.studentsId)
        setstaffsId(response.data.staffsId)
        setnonStaffsId(response.data.nonStaffsId)
        setgames(response.data.games)
        setvehicles(response.data.vehicles)
        setinfrastructure(response.data.infrastructure)
        setmedia(response.data.media)
        setattendance(response.data.attendance)
        setsalaries(response.data.salaries)
      }).catch(error => {
        console.log(error)
      })
    }
    else {
      setDate(getCurrentDate())
    }
    // return () => console.log("Cleanup..");
  }, [])

  const title = () => {
    if (itemId) {
      return "Update Admin"
    } else {
      return "Add Admin"
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
                <label for="text">*Admin Id:</label>
                <input type='text' class='form-control' placeholder='Enter Admin Id' name='adminId'
                  value={adminId} onChange={(e) => setAdminId(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Students Id:</label>
                <input type='text' class='form-control' placeholder='Students Id' name='studentsId'
                  value={studentsId} onChange={(e) => setStudentsId(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Staffs Id:</label>
                <input type='text' class='form-control' placeholder='Staffs Id' name='staffsId'
                  value={staffsId} onChange={(e) => setStaffsId(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Non Staffs Id:</label>
                <input type='text' class='form-control' placeholder='Non Staffs Id' name='nonstaffsId'
                  value={nonStaffsId} onChange={(e) => setnonStaffsId(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Games:</label>
                <input type='text' class='form-control' placeholder='Games' name='games'
                  value={games} onChange={(e) => setgames(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Vehicles:</label>
                <input type='text' class='form-control' placeholder='Vehicles' name='vehicles'
                  value={vehicles} onChange={(e) => setvehicles(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Infrastructure:</label>
                <input type='text' class='form-control' placeholder='Infrastructure' name='infrastructure'
                  value={infrastructure} onChange={(e) => setinfrastructure(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Media:</label>
                <input type='text' class='form-control' placeholder='Media' name='media'
                  value={media} onChange={(e) => setmedia(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Attendance:</label>
                <input type='text' class='form-control' placeholder='Attendance' name='attendance'
                  value={attendance} onChange={(e) => setattendance(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Salaries:</label>
                <input type='text' class='form-control' placeholder='Salaries' name='salaries'
                  value={salaries} onChange={(e) => setsalaries(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditAdmin(e)}>{title()}</button>
                <Link to="/admins" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/admins" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutAdminComponent