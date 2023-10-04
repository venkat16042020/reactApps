import { useNavigate, useParams } from "react-router"
import AttendanceServices from "../../services/AttendanceServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteAttendanceComponent = () =>{
    const history1 = useNavigate()
    var {attendanceId} = useParams()

    const deleteAttendance = (e) =>{
        e.preventDefault();
        if(attendanceId){
            AttendanceServices.deleteAttendance(attendanceId).then(
                (response) =>{
                    history1('/attendances')
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
                        <h3 className="text-center">Delete attendance - {attendanceId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteAttendance(e)}>
                                    Delete Attendance
                                </button>
                                <Link to="/attendance" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAttendanceComponent