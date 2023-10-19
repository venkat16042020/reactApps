import axios from "axios"
const BASE_REST_API_URL_FEES = 'http://localhost:1003/api/'

class FeesServices{
    getAllFees(){
        return axios.get(BASE_REST_API_URL_FEES + "getAllFees")
    }
    getFeesByFeesId(feesId){
        return axios.get(BASE_REST_API_URL_FEES + "fees/" + feesId)
    }
    addFees(fees){
        return axios.post(BASE_REST_API_URL_FEES + "addFees", fees)
    }

    updateFees(feesId, fees){
        return axios.put(BASE_REST_API_URL_FEES + "updateFees/" + feesId, fees)
    }
    deleteFees(feesId){
        return axios.delete(BASE_REST_API_URL_FEES + "deleteFees/" + feesId)
    }
}

export default new FeesServices()
