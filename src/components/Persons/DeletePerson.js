import { useNavigate, useParams } from "react-router"
import PersonServices from "../../services/PersonServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeletePerson = () =>{
    const history1 = useNavigate()
    var {personId} = useParams()

    const deletePerson = (e) =>{
        e.preventDefault();
        if(personId){
            PersonServices.deletePerson(personId).then(
                (response) =>{
                    history1.push('/persons')
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
                        <h3 className="text-center">Delete person - {personId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deletePerson(e)}>
                                    Delte Person
                                </button>
                                <Link to="/persons" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletePerson