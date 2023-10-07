import axios from "axios"
const BASE_REST_API_URL_NONSTAFFS = 'http://localhost:1003/api/'

class NonStaffServices{
    getAllNonStaff(){
        return axios.get(BASE_REST_API_URL_NONSTAFFS + "getAllNonStaff")
    }
    getNonStaffByNonStaffId(nonNonStaffId){
        return axios.get(BASE_REST_API_URL_NONSTAFFS + "nonNonStaff/" + nonNonStaffId)
    }
    addNonStaff(nonNonStaff){
        return axios.post(BASE_REST_API_URL_NONSTAFFS + "addNonStaff", nonNonStaff)
    }

    updateNonStaff(nonNonStaffId, nonNonStaff){
        return axios.put(BASE_REST_API_URL_NONSTAFFS + "updateNonStaff/" + nonNonStaffId, nonNonStaff)
    }
    deleteNonStaff(nonNonStaffId){
        return axios.delete(BASE_REST_API_URL_NONSTAFFS + "deleteNonStaff/" + nonNonStaffId)
    }
}

export default new NonStaffServices()
