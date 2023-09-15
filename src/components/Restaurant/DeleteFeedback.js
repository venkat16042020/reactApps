import { useNavigate, useParams } from "react-router"
import FeedbackServices from "../../services/FeedbackServices "
import Header from "../Header/Header"
import { Link } from 'react-router-dom'


const DeleteFeedback = () =>{
    const history1 = useNavigate()
    var {feedbackId} = useParams()

    const deleteFeedback = (e) =>{
        e.preventDefault();
        if(feedbackId){
            FeedbackServices.deleteFeedback(feedbackId).then(
                (response) =>{
                    history1('/feedback')
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
                        <h3 className="text-center">Delete feedback - {feedbackId}</h3>
                        <div className="card-body">
                            <center>
                                <button className="btn btn-danger" onClick={(e)=>deleteFeedback(e)}>
                                    Delte Feedback
                                </button>
                                <Link to="/feedback" className='btn btn-info ms-3'>Cancel</Link>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteFeedback