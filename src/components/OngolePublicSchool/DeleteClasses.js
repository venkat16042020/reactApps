import { useNavigate, useParams } from "react-router"
import ClassesServices from "../../services/ClassesServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteClassesComponent = () =>{
    const history1 = useNavigate()
    var {classesId} = useParams()

    const deleteClasses = (e) =>{
        e.preventDefault();
        if(classesId){
            ClassesServices.deleteClasses(classesId).then(
                (response) =>{
                    history1('/classes')
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
                        <h3 className="text-center">Delete classes - {classesId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteClasses(e)}>
                                    Delte Classes
                                </button>
                                <Link to="/classes" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteClassesComponent