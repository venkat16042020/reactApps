import { useNavigate, useParams } from "react-router"
import RentServices from "../../services/RentServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteRent = () =>{
    const history1 = useNavigate()
    var {rentId} = useParams()

    const deleteRent = (e) =>{
        e.preventDefault();
        if(rentId){
            RentServices.deleteRent(rentId).then(
                (response) =>{
                    history1('/rent')
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
                        <h3 className="text-center">Delete rent - {rentId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteRent(e)}>
                                    Delte Rent
                                </button>
                                <Link to="/rent" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteRent