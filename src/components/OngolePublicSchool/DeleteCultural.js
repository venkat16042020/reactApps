import { useNavigate, useParams } from "react-router"
import CulturalServices from "../../services/CulturalServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteCulturalComponent = () =>{
    const history1 = useNavigate()
    var {culturalId} = useParams()

    const deleteCultural = (e) =>{
        e.preventDefault();
        if(culturalId){
            CulturalServices.deleteCultural(culturalId).then(
                (response) =>{
                    history1('/culturals')
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
                        <h3 className="text-center">Delete cultural - {culturalId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteCultural(e)}>
                                    Delte Cultural
                                </button>
                                <Link to="/culturals" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteCulturalComponent