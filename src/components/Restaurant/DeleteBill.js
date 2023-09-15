import { useNavigate, useParams } from "react-router"
import BillServices from "../../services/BillServices "
import Header from "../Header/Header"
import { Link } from 'react-router-dom'

const DeleteBill = () =>{
    const history1 = useNavigate()
    var {billId} = useParams()

    const deleteBill = (e) =>{
        e.preventDefault();
        if(billId){
            BillServices.deleteBill(billId).then(
                (response) =>{
                    history1('/bills')
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
                        <h3 className="text-center">Delete bill - {billId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteBill(e)}>
                                    Delete Bill
                                </button>
                                <Link to="/bills" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteBill