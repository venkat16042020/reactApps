import { useNavigate, useParams } from "react-router"
import NonStaffServices from "../../services/NonStaffServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteNonStaffComponent = () =>{
    const history1 = useNavigate()
    var {nonStaffId} = useParams()

    const deleteNonStaff = (e) =>{
        e.preventDefault();
        if(nonStaffId){
            NonStaffServices.deleteNonStaff(nonStaffId).then(
                (response) =>{
                    history1('/nonStaff')
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
                        <h3 className="text-center">Delete nonStaff - {nonStaffId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteNonStaff(e)}>
                                    Delte NonStaff
                                </button>
                                <Link to="/nonStaff" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteNonStaffComponent