import axios from "axios"
const BASE_REST_API_URL_PERSON = 'http://localhost:1003/api/'

class FeedbackServices{
    getAllFeedback(){
        return axios.get(BASE_REST_API_URL_PERSON + "getAllFeedbacks")
    }
    getFeedbackById(feedbackId){
        return axios.get(BASE_REST_API_URL_PERSON + "feedback/" + feedbackId)
    }
    addFeedback(feedback){
        return axios.post(BASE_REST_API_URL_PERSON + "addFeedback", feedback)
    }

    updateFeedback(feedbackId, feedback){
        return axios.put(BASE_REST_API_URL_PERSON + "updateFeedback/" + feedbackId, feedback)
    }
    deleteFeedback(feedbackId){
        return axios.delete(BASE_REST_API_URL_PERSON + "deleteFeedback/" + feedbackId)
    }
}

export default new FeedbackServices()
