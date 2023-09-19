import axios from "axios"
const BASE_REST_API_URL_RENT = 'http://localhost:1003/api/'

class RentServices{
    getAllRent(){
        return axios.get(BASE_REST_API_URL_RENT + "getAllRent")
    }

    getAllRent(){
        return axios.get(BASE_REST_API_URL_RENT + "getAllRent")
    }

    getRentByItemId(rentid){
        return axios.get(BASE_REST_API_URL_RENT + "rentItem/" + rentid)
    }
    addRent(rent){
        return axios.post(BASE_REST_API_URL_RENT + "addRent", rent)
    }

    updateRent(rentId, rent){
        return axios.put(BASE_REST_API_URL_RENT + "updateRent/" + rentId, rent)
    }
    deleteRent(rentId){
        return axios.delete(BASE_REST_API_URL_RENT + "deleteRent/" + rentId)
    }
}

export default new RentServices()
