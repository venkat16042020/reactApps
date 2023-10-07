import { useNavigate, useParams } from "react-router"
import StaffServices from "../../services/StaffServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteStaffComponent = () =>{
    const history1 = useNavigate()
    var {staffsId} = useParams()

    const deleteStaff = (e) =>{
        e.preventDefault();
        if(staffsId){
            StaffServices.deleteStaff(staffsId).then(
                (response) =>{
                    history1('/staffs')
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
                        <h3 className="text-center">Delete staffs - {staffsId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteStaff(e)}>
                                    Delte Staff
                                </button>
                                <Link to="/staffs" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteStaffComponent