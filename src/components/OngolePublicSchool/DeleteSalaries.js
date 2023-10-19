import { useNavigate, useParams } from "react-router"
import SalariesServices from "../../services/SalariesServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteSalariesComponent = () =>{
    const history1 = useNavigate()
    var {salariesId} = useParams()

    const deleteSalaries = (e) =>{
        e.preventDefault();
        if(salariesId){
            SalariesServices.deleteSalaries(salariesId).then(
                (response) =>{
                    history1('/salariess')
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
                        <h3 className="text-center">Delete salaries - {salariesId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteSalaries(e)}>
                                    Delte Salaries
                                </button>
                                <Link to="/salariess" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteSalariesComponent