import { useNavigate, useParams } from "react-router"
import StockServices from "../../services/StockServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteStock = () =>{
    const history1 = useNavigate()
    var {stockId} = useParams()

    const deleteStock = (e) =>{
        e.preventDefault();
        if(stockId){
            StockServices.deleteStock(stockId).then(
                (response) =>{
                    history1('/stock')
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
                        <h3 className="text-center">Delete stock - {stockId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteStock(e)}>
                                    Delte Stock
                                </button>
                                <Link to="/stock" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteStock