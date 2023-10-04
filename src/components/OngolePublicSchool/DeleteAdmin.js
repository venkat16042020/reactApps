import { useNavigate, useParams } from "react-router"
import AdminServices from "../../services/AdminServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteAdminComponent = () =>{
    const history1 = useNavigate()
    var {adminId} = useParams()

    const deleteAdmin = (e) =>{
        e.preventDefault();
        if(adminId){
            AdminServices.deleteAdmin(adminId).then(
                (response) =>{
                    history1('/admins')
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
                        <h3 className="text-center">Delete admin - {adminId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteAdmin(e)}>
                                    Delte Admin
                                </button>
                                <Link to="/admins" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAdminComponent