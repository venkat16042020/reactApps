import { useNavigate, useParams } from "react-router"
import FeesServices from "../../services/FeesServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteFeesComponent = () =>{
    const history1 = useNavigate()
    var {feesId} = useParams()

    const deleteFees = (e) =>{
        e.preventDefault();
        if(feesId){
            FeesServices.deleteFees(feesId).then(
                (response) =>{
                    history1('/feess')
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
                        <h3 className="text-center">Delete fees - {feesId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteFees(e)}>
                                    Delte Fees
                                </button>
                                <Link to="/feess" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteFeesComponent