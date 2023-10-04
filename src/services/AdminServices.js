import axios from "axios"
const BASE_REST_API_URL_ADMIN = 'http://localhost:1003/api/'

class AdminServices{
    getAllAdmin(){
        return axios.get(BASE_REST_API_URL_ADMIN + "getAllAdmin")
    }
    getAdminByAdminId(adminId){
        return axios.get(BASE_REST_API_URL_ADMIN + "admin/" + adminId)
    }
    addAdmin(admin){
        return axios.post(BASE_REST_API_URL_ADMIN + "addAdmin", admin)
    }

    updateAdmin(adminId, admin){
        return axios.put(BASE_REST_API_URL_ADMIN + "updateAdmin/" + adminId, admin)
    }
    deleteAdmin(adminId){
        return axios.delete(BASE_REST_API_URL_ADMIN + "deleteAdmin/" + adminId)
    }
}

export default new AdminServices()
