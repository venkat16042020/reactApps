import axios from "axios"
const BASE_REST_API_URL_STAFFS = 'http://localhost:1003/api/'

class StaffsServices{
    getAllStaffs(){
        return axios.get(BASE_REST_API_URL_STAFFS + "getAllStaffs")
    }
    getStaffsByStaffsId(staffsId){
        return axios.get(BASE_REST_API_URL_STAFFS + "staffs/" + staffsId)
    }
    addStaffs(staffs){
        return axios.post(BASE_REST_API_URL_STAFFS + "addStaffs", staffs)
    }

    updateStaffs(staffsId, staffs){
        return axios.put(BASE_REST_API_URL_STAFFS + "updateStaffs/" + staffsId, staffs)
    }
    deleteStaffs(staffsId){
        return axios.delete(BASE_REST_API_URL_STAFFS + "deleteStaffs/" + staffsId)
    }
}

export default new StaffsServices()
