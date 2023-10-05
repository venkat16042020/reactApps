import { useNavigate, useParams } from "react-router"
import StaffsServices from "../../services/StaffsServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteStaffsComponent = () =>{
    const history1 = useNavigate()
    var {staffsId} = useParams()

    const deleteStaffs = (e) =>{
        e.preventDefault();
        if(staffsId){
            StaffsServices.deleteStaffs(staffsId).then(
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
                                <button className="btn btn-danger" onClick={(e)=>deleteStaffs(e)}>
                                    Delte Staffs
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

export default DeleteStaffsComponent