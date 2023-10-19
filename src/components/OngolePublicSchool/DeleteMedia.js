import { useNavigate, useParams } from "react-router"
import MediaServices from "../../services/MediaServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteMediaComponent = () =>{
    const history1 = useNavigate()
    var {mediaId} = useParams()

    const deleteMedia = (e) =>{
        e.preventDefault();
        if(mediaId){
            MediaServices.deleteMedia(mediaId).then(
                (response) =>{
                    history1('/medias')
                }
            ).catch(error => {
                console.log(error)
            });
        }
    }
    return(
        <div>
            <div className="container">
                <Header></Header>
                <br></br>
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <br></br>
                        <h3 className="text-center">Delete media - {mediaId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteMedia(e)}>
                                    Delte Media
                                </button>
                                <Link to="/medias" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteMediaComponent