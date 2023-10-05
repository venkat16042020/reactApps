import axios from "axios"
const BASE_REST_API_URL_NONSTAFFS = 'http://localhost:1003/api/'

class NonStaffsServices{
    getAllNonStaffs(){
        return axios.get(BASE_REST_API_URL_NONSTAFFS + "getAllNonStaffs")
    }
    getNonStaffsByNonStaffsId(nonNonStaffsId){
        return axios.get(BASE_REST_API_URL_NONSTAFFS + "nonNonStaffs/" + nonNonStaffsId)
    }
    addNonStaffs(nonNonStaffs){
        return axios.post(BASE_REST_API_URL_NONSTAFFS + "addNonStaffs", nonNonStaffs)
    }

    updateNonStaffs(nonNonStaffsId, nonNonStaffs){
        return axios.put(BASE_REST_API_URL_NONSTAFFS + "updateNonStaffs/" + nonNonStaffsId, nonNonStaffs)
    }
    deleteNonStaffs(nonNonStaffsId){
        return axios.delete(BASE_REST_API_URL_NONSTAFFS + "deleteNonStaffs/" + nonNonStaffsId)
    }
}

export default new NonStaffsServices()
