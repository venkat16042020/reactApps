import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import MediaServices from '../../services/MediaServices'
import Header from '../Header/Header'

const PostPutMediaComponent = () => {
  const [media_Id, setMedia_Id] = useState('')
  const [twitter, setTwitter] = useState('')
  const [facebook, setFacebook] = useState('')
  const [youTube, setYouTube] = useState('')
  const [tv9, setTv9] = useState('')
  const [etv, setEtv] = useState('')
  const [v6News, setV6News] = useState('')
  const history1 = useNavigate()
  var { mediaId } = useParams()
  var media = { mediaId, twitter, facebook, youTube, tv9, etv, v6News}

  const addOrEditMedia = (e) => {
    e.preventDefault()
    if (mediaId) {
    console.log("Editing media...")
    console.log(mediaId)
    console.log(media)
      MediaServices.updateMedia(mediaId, media).then(
        (response) => {
          history1('/media')
        }
      ).catch(error => {
        console.log(error)
      })
    } else {
      mediaId = media_Id
      media = { mediaId, twitter, facebook, youTube, tv9, etv, v6News}
      console.log(media)
      MediaServices.addMedia(media).then(
        (response) => {
          history1('/media')
        }
      ).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {
    if (mediaId) {
      MediaServices.getMediaByMediaId(mediaId).then((response) => {
        setMedia_Id(response.data.mediaId)
        setTwitter(response.data.twitter)
        setFacebook(response.data.facebook)
        setYouTube(response.data.youTube)
        setTv9(response.data.tv9)
        setEtv(response.data.etv)
        setV6News(response.data.v6News)
        
      }).catch(error => {
        console.log(error)
      })}
    }, [])

  const title = () => {
    if (mediaId) {
      return "Update Media"
    } else {
      return "Add Media"
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
                <label for="text">*Media Id:</label>
                <input type='text' class='form-control' placeholder='Enter Media Id' name='mediaId'
                  value={mediaId} onChange={(e) => setMedia_Id(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Twitter:</label>
                <input type='text' class='form-control' placeholder='Twitter' name='twitter'
                  value={twitter} onChange={(e) => setTwitter(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Facebook:</label>
                <input type='text' class='form-control' placeholder='Facebook' name='facebook'
                  value={facebook} onChange={(e) => setFacebook(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*YouTube:</label>
                <input type='text' class='form-control' placeholder='YouTube' name='youTube'
                  value={youTube} onChange={(e) => setYouTube(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Tv9:</label>
                <input type='text' class='form-control' placeholder='Tv9' name='tv9'
                  value={tv9} onChange={(e) => setTv9(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*Etv:</label>
                <input type='text' class='form-control' placeholder='Etv' name='etv'
                  value={etv} onChange={(e) => setEtv(e.target.value)}>
                </input>
                </div>
                <div class="col-3">
                <label for="text">*V6News:</label>
                <input type='text' class='form-control' placeholder='V6News' name='v6News'
                  value={v6News} onChange={(e) => setV6News(e.target.value)}>
                </input>
              </div>
              <div class='col-sm-8'>
                <br></br>
                <button className='btn btn-success ms-1' onClick={(e) =>
                  addOrEditMedia(e)}>{title()}</button>
                <Link to="/media" className='btn btn-danger ms-1'>Cancel</Link>
                <Link to="/media" className='btn btn-info ms-1'>Clear</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostPutMediaComponent