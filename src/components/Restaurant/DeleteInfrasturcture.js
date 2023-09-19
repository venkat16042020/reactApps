import { useNavigate, useParams } from "react-router"
import InfrastructureServices from "../../services/InfrastructureServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteInfrastructureItem = () =>{
    const history1 = useNavigate()
    var {itemId} = useParams()

    const deleteInfrastructureItem = (e) =>{
        e.preventDefault();
        if(itemId){
            InfrastructureServices.deleteInfrastructure(itemId).then(
                (response) =>{
                    history1('/infrastructure')
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
                        <h3 className="text-center">Delete menuItem - {itemId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteInfrastructureItem(e)}>
                                    Delte InfrastructureItem
                                </button>
                                <Link to="/infrastructure" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteInfrastructureItem