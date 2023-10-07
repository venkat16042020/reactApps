import axios from "axios"
const BASE_REST_API_URL_STAFFS = 'http://localhost:1003/api/'

class StaffServices{
    getAllStaff(){
        return axios.get(BASE_REST_API_URL_STAFFS + "getAllStaff")
    }
    getStaffByStaffId(staffId){
        return axios.get(BASE_REST_API_URL_STAFFS + "staff/" + staffId)
    }
    addStaff(staff){
        return axios.post(BASE_REST_API_URL_STAFFS + "addStaff", staff)
    }

    updateStaff(staffId, staff){
        return axios.put(BASE_REST_API_URL_STAFFS + "updateStaff/" + staffId, staff)
    }
    deleteStaff(staffId){
        return axios.delete(BASE_REST_API_URL_STAFFS + "deleteStaff/" + staffId)
    }
}

export default new StaffServices()
