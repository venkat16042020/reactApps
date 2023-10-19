import axios from "axios"
const BASE_REST_API_URL_DEPARTMENT = 'http://localhost:1003/api/'

class DepartmentServices{
    getAllDepartment(){
        return axios.get(BASE_REST_API_URL_DEPARTMENT + "getAllDepartment")
    }
    getDepartmentByDepartmentId(departmentId){
        return axios.get(BASE_REST_API_URL_DEPARTMENT + "department/" + departmentId)
    }
    addDepartment(department){
        return axios.post(BASE_REST_API_URL_DEPARTMENT + "addDepartment", department)
    }

    updateDepartment(departmentId, department){
        return axios.put(BASE_REST_API_URL_DEPARTMENT + "updateDepartment/" + departmentId, department)
    }
    deleteDepartment(departmentId){
        return axios.delete(BASE_REST_API_URL_DEPARTMENT + "deleteDepartment/" + departmentId)
    }
}

export default new DepartmentServices()
