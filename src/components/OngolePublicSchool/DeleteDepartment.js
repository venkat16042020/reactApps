import { useNavigate, useParams } from "react-router"
import DepartmentServices from "../../services/DepartmentServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteDepartmentComponent = () =>{
    const history1 = useNavigate()
    var {departmentId} = useParams()

    const deleteDepartment = (e) =>{
        e.preventDefault();
        if(departmentId){
            DepartmentServices.deleteDepartment(departmentId).then(
                (response) =>{
                    history1('/departments')
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
                        <h3 className="text-center">Delete department - {departmentId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteDepartment(e)}>
                                    Delte Department
                                </button>
                                <Link to="/departments" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteDepartmentComponent