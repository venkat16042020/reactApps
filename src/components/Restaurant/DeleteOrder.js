import { useNavigate, useParams } from "react-router"
import OrderServices from "../../services/OrderServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'

const DeleteOrderComponent = () =>{
    const history1 = useNavigate()
    var {orderId} = useParams()

    const deleteOrder = (e) =>{
        e.preventDefault();
        if(orderId){
            OrderServices.deleteOrder(orderId).then(
                (response) =>{
                    history1('/order')
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
                        <h3 className="text-center">Delete Order - {orderId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteOrder(e)}>
                                    Delte Order
                                </button>
                                <Link to="/order" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteOrderComponent