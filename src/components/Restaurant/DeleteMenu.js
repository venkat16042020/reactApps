import { useNavigate, useParams } from "react-router"
import MenuServices from "../../services/MenuServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteMenuItem = () =>{
    const history1 = useNavigate()
    var {itemId} = useParams()

    const deleteMenuItem = (e) =>{
        e.preventDefault();
        if(itemId){
            MenuServices.deleteMenuItem(itemId).then(
                (response) =>{
                    history1('/menuItems')
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
                                <button className="btn btn-danger" onClick={(e)=>deleteMenuItem(e)}>
                                    Delte MenuItem
                                </button>
                                <Link to="/menuItems" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteMenuItem