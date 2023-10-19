import axios from "axios"
const BASE_REST_API_URL_CULTURAL = 'http://localhost:1003/api/'

class CulturalServices{
    getAllCultural(){
        return axios.get(BASE_REST_API_URL_CULTURAL + "getAllCultural")
    }
    getCulturalByCulturalId(culturalId){
        return axios.get(BASE_REST_API_URL_CULTURAL + "cultural/" + culturalId)
    }
    addCultural(cultural){
        return axios.post(BASE_REST_API_URL_CULTURAL + "addCultural", cultural)
    }

    updateCultural(culturalId, cultural){
        return axios.put(BASE_REST_API_URL_CULTURAL + "updateCultural/" + culturalId, cultural)
    }
    deleteCultural(culturalId){
        return axios.delete(BASE_REST_API_URL_CULTURAL + "deleteCultural/" + culturalId)
    }
}

export default new CulturalServices()
