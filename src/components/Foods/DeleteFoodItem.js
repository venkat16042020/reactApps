import { useNavigate, useParams } from "react-router"
import AccountServices from "../../services/AccountServices"
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteAccountComponent = () =>{
    const history1 = useNavigate()
    var {accountId} = useParams()

    const deleteAccount = (e) =>{
        e.preventDefault();
        if(accountId){
            AccountServices.deleteAccount(accountId).then(
                (response) =>{
                    history1('/accounts')
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
                        <h3 className="text-center">Delete Account - {accountId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteAccount(e)}>
                                    Delte Account
                                </button>
                                <Link to="/accounts" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccountComponent