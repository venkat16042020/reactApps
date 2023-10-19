import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import CulturalServices from '../../services/CulturalServices'
import Header from '../Header/Header'

const PostPutCulturalComponent = () => {
  const [cultural_Id, setCultural_Id] = useState('')
  const [ventriloquy, setventriloquy] = useState('')
  const [mime, setmime] = useState('')
  const [liveArt, setliveArt] = useState('')
  const [standUpComedy, setstandUpComedy] = useState('')
  const [classicalInstrumentalMusic, setclassicalInstrumentalMusic] = useState('')
  const [aCapella, setaCapella] = useState('')
  const [date, setdate] = useState('')
  const history1 = useNavigate()
  var { culturalId } = useParams()
  var cultural = { culturalId, ventriloquy, mime, liveArt, standUpComedy, classicalInstrumentalMusic, aCapella, date}

  const addOrEditCultural = (e) => {
    e.preventDefault()
    if (culturalId) {
    console.log("Editing cultural...")
    console.log(culturalId)
    console.log(cultural)
      CulturalServices.updateCultural(culturalId, cultural).then(
        (response) => {
          history1('/cultural')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      culturalId = cultural_Id
      cultural = { culturalId, ventriloquy, mime, liveArt, standUpComedy, classicalInstrumentalMusic, aCapella, date }
      console.log(cultural)
      CulturalServices.addCultural(cultural).then(
        (response) => {
          history1('/cultural')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (culturalId) {
      CulturalServices.getCulturalByCulturalId(culturalId).then((response) => {
        setCultural_Id(response.data.culturalId)
        setventriloquy(response.data.ventriloquy)
        setmime(response.data.mime)
        setliveArt(response.data.liveArt)
        setstandUpComedy(response.data.standUpComedy)
        setclassicalInstrumentalMusic(response.data.classicalInstrumentalMusic)
        setaCapella(response.data.aCapella)
        setdate(response.data.date)

      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (culturalId) {
      return "Update Cultural"
    } else {
      return "Add Cultural"
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
                <label for="text">*Cultural Id:</label>
                <input type='text' class='form-control' placeholder='Enter Cultural Id' name='culturalId'
                  value={culturalId} onChange={(e) => setCultural_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Ventriloquy:</label>
                <input type='text' class='form-control' placeholder='Ventriloquy' name='ventriloquy'
                  value={ventriloquy} onChange={(e) => setventriloquy(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Mime:</label>
                <input type='text' class='form-control' placeholder='Mime' name='mime'
                  value={mime} onChange={(e) => setmime(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Live Art:</label>
                <input type='text' class='form-control' placeholder='Live Art' name='liveArt'
                  value={liveArt} onChange={(e) => setliveArt(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Stand Up Comedy:</label>
                <input type='text' class='form-control' placeholder='Stand Up Comedy' name='standUpComedy'
                  value={standUpComedy} onChange={(e) => setstandUpComedy(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Classical Instrumental Music:</label>
                <input type='text' class='form-control' placeholder='Classical Instrumental Music' name='classicalInstrumentalMusic'
                  value={classicalInstrumentalMusic} onChange={(e) => setclassicalInstrumentalMusic(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*ACapella:</label>
                <input type='text' class='form-control' placeholder='ACapella' name='aCapella'
                  value={aCapella} onChange={(e) => setaCapella(e.target.value)}>
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
                  addOrEditCultural(e)}>{title()}</button>
                <Link to="/cultural" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/cultural" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutCulturalComponent