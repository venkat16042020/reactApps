import axios from "axios"
const BASE_REST_API_URL_SALARIES = 'http://localhost:1003/api/'

class SalariesServices{
    getAllSalaries(){
        return axios.get(BASE_REST_API_URL_SALARIES + "getAllSalaries")
    }
    getSalariesBySalariesId(salariesId){
        return axios.get(BASE_REST_API_URL_SALARIES + "salaries/" + salariesId)
    }
    addSalaries(salaries){
        return axios.post(BASE_REST_API_URL_SALARIES + "addSalaries", salaries)
    }

    updateSalaries(salariesId, salaries){
        return axios.put(BASE_REST_API_URL_SALARIES + "updateSalaries/" + salariesId, salaries)
    }
    deleteSalaries(salariesId){
        return axios.delete(BASE_REST_API_URL_SALARIES + "deleteSalaries/" + salariesId)
    }
}

export default new SalariesServices()
