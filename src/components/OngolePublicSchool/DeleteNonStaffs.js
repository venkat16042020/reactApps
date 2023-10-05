import { useNavigate, useParams } from "react-router"
import NonStaffsServices from "../../services/NonStaffsServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteNonStaffsComponent = () =>{
    const history1 = useNavigate()
    var {nonStaffsId} = useParams()

    const deleteNonStaffs = (e) =>{
        e.preventDefault();
        if(nonStaffsId){
            NonStaffsServices.deleteNonStaffs(nonStaffsId).then(
                (response) =>{
                    history1('/nonStaffs')
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
                        <h3 className="text-center">Delete nonStaffs - {nonStaffsId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteNonStaffs(e)}>
                                    Delte NonStaffs
                                </button>
                                <Link to="/nonStaffs" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteNonStaffsComponent