import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DepartmentServices from '../../services/DepartmentServices'
import Header from '../Header/Header'

const PostPutDepartmentComponent = () => {
  const [department_Id, setDepartment_Id] = useState('')
  const [englishDep, setenglishDep] = useState('')
  const [teluguDep, setteluguDep] = useState('')
  const [hindiDep, sethindiDep] = useState('')
  const [mathsDep, setmathsDep] = useState('')
  const [scienceDep, setscienceDep] = useState('')
  const [socialDep, setsocialDep] = useState('')
  const history1 = useNavigate()
  var { departmentId } = useParams()
  var department = { departmentId, englishDep, teluguDep, hindiDep, mathsDep, scienceDep, socialDep}

  const addOrEditDepartment = (e) => {
    e.preventDefault()
    if (departmentId) {
    console.log("Editing department...")
    console.log(departmentId)
    console.log(department)
      DepartmentServices.updateDepartment(departmentId, department).then(
        (response) => {
          history1('/department')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      departmentId = department_Id
      department = { departmentId, englishDep, teluguDep, hindiDep, mathsDep, scienceDep, socialDep }
      console.log(department)
      DepartmentServices.addDepartment(department).then(
        (response) => {
          history1('/department')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (departmentId) {
      DepartmentServices.getDepartmentByDepartmentId(departmentId).then((response) => {
        setDepartment_Id(response.data.departmentId)
        setenglishDep(response.data.englishDep)
        setteluguDep(response.data.teluguDep)
        sethindiDep(response.data.hindiDep)
        setmathsDep(response.data.mathsDep)
        setscienceDep(response.data.scienceDep)
        setsocialDep(response.data.socialDep)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (departmentId) {
      return "Update Department"
    } else {
      return "Add Department"
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
                <label for="text">*Department Id:</label>
                <input type='text' class='form-control' placeholder='Enter Department Id' name='departmentId'
                  value={departmentId} onChange={(e) => setDepartment_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*English Dep:</label>
                <input type='text' class='form-control' placeholder='English Dep' name='englishDep'
                  value={englishDep} onChange={(e) => setenglishDep(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Telugu Dep:</label>
                <input type='text' class='form-control' placeholder='Telugu Dep' name='teluguDep'
                  value={teluguDep} onChange={(e) => setteluguDep(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Hindi Dep:</label>
                <input type='text' class='form-control' placeholder='Hindi Dep' name='hindiDep'
                  value={hindiDep} onChange={(e) => sethindiDep(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Maths Dep:</label>
                <input type='text' class='form-control' placeholder='Maths Dep' name='mathsDep'
                  value={mathsDep} onChange={(e) => setmathsDep(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Science Dep:</label>
                <input type='text' class='form-control' placeholder='Science Dep' name='scienceDep'
                  value={scienceDep} onChange={(e) => setscienceDep(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Social Dep:</label>
                <input type='text' class='form-control' placeholder='Social Dep' name='socialDep'
                  value={socialDep} onChange={(e) => setsocialDep(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditDepartment(e)}>{title()}</button>
                <Link to="/department" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/department" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutDepartmentComponent