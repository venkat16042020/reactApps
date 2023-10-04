import { useNavigate, useParams } from "react-router"
import StudentsServices from "../../services/StudentsServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteStudentsComponent = () =>{
    const history1 = useNavigate()
    var {studentsId} = useParams()

    const deleteStudents = (e) =>{
        e.preventDefault();
        if(studentsId){
            StudentsServices.deleteStudents(studentsId).then(
                (response) =>{
                    history1('/students')
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
                        <h3 className="text-center">Delete students - {studentsId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteStudents(e)}>
                                    Delte Students
                                </button>
                                <Link to="/students" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteStudentsComponent