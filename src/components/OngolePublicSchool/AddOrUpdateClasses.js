import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import ClassesServices from '../../services/ClassesServices'
import Header from '../Header/Header'

const PostPutClassesComponent = () => {
  const [classes_Id, setClasses_Id] = useState('')
  const [uKg, setUKg] = useState('')
  const [lKg, setLKg] = useState('')
  const [firstClass, setFirstClass] = useState('')
  const [secondClass, setSecondClasS] = useState('')
  const [thirdClass, setThirdClass] = useState('')
  const [fourthClass, setFourthClass] = useState('')
  const [fifthClass, setFifthClass] = useState('')
  const [sixthClass, setSixthClass] = useState('')
  const [seventhClass, setSeventhClass] = useState('')
  const [eightClass, setEightClass] = useState('')
  const [ninthClass, setNinthClass] = useState('')
  const [tenthClass, setTenthClass] = useState('')
  
  
  const history1 = useNavigate()
  var { classesId } = useParams()
  var classes = { classes_Id, uKg, lKg, firstClass, secondClass, thirdClass, fourthClass, fifthClass, sixthClass, seventhClass, eightClass, ninthClass, tenthClass  }

  const addOrEditClasses = (e) => {
    e.preventDefault()
    if (classesId) {
    console.log("Editing classes...")
    console.log(classesId)
    console.log(classes)
      ClassesServices.updateClasses(classesId, classes).then(
        (response) => {
          history1('/classes')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      classesId = classes_Id
      classes = { classes_Id, uKg, lKg, firstClass, secondClass, thirdClass, fourthClass, fifthClass, sixthClass, seventhClass, eightClass, ninthClass, tenthClass }
      console.log(classes)
      ClassesServices.addClasses(classes).then(
        (response) => {
          history1('/classes')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (classesId) {
      ClassesServices.getClassesByClassesId(classesId).then((response) => {
        setClasses_Id(response.data.classes_Id)
        setUKg(response.data.uKg)
        setLKg(response.data.lKg)
        setFirstClass(response.data.firstClass)
        setSecondClasS(response.data.secondClass)
        setThirdClass(response.data.thirdClass)
        setFourthClass(response.data.fourthClass)
        setFifthClass(response.data.fifthClass)
        setSixthClass(response.data.sixthClass)
        setSeventhClass(response.data.seventhClass)
        setEightClass(response.data.eightClass)
        setNinthClass(response.data.ninthClass)
        setTenthClass(response.data.tenthClass)


      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (classesId) {
      return "Update Classes"
    } else {
      return "Add Classes"
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
                <label for="text">*Classes Id:</label>
                <input type='text' class='form-control' placeholder='Enter Classes Id' name='classesId'
                  value={classesId} onChange={(e) => setClasses_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*U Kg:</label>
                <input type='text' class='form-control' placeholder='U Kg' name='uKg'
                  value={uKg} onChange={(e) => setUKg(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*L Kg:</label>
                <input type='text' class='form-control' placeholder='L Kg' name='lKg'
                  value={lKg} onChange={(e) => setLKg(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*First Class:</label>
                <input type='text' class='form-control' placeholder='First Class' name='firstClass'
                  value={firstClass} onChange={(e) => setFirstClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Second Class:</label>
                <input type='text' class='form-control' placeholder='Second Class' name='secondClass'
                  value={secondClass} onChange={(e) => setSecondClasS(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Third Class:</label>
                <input type='text' class='form-control' placeholder='Third Class' name='thirdClass'
                  value={thirdClass} onChange={(e) => setThirdClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Fourth Class:</label>
                <input type='text' class='form-control' placeholder='Fourth Class' name='fourthClass'
                  value={fourthClass} onChange={(e) => setFourthClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Fifth Class:</label>
                <input type='text' class='form-control' placeholder='Fifth Class' name='fifthClass'
                  value={fifthClass} onChange={(e) => setFifthClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Sixth Class:</label>
                <input type='text' class='form-control' placeholder='Sixth Class' name='sixthClass'
                  value={sixthClass} onChange={(e) => setSixthClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Seventh Class:</label>
                <input type='text' class='form-control' placeholder='Seventh Class' name='seventhClass'
                  value={seventhClass} onChange={(e) => setSeventhClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Eight Class:</label>
                <input type='text' class='form-control' placeholder='Eight Class' name='eightClass'
                  value={eightClass} onChange={(e) => setEightClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Ninth Class:</label>
                <input type='text' class='form-control' placeholder='Ninth Class' name='ninthClass'
                  value={ninthClass} onChange={(e) => setNinthClass(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Tenth Class:</label>
                <input type='text' class='form-control' placeholder='Tenth Class' name='tenthClass'
                  value={tenthClass} onChange={(e) => setTenthClass(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditClasses(e)}>{title()}</button>
                <Link to="/classes" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/classes" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutClassesComponent
