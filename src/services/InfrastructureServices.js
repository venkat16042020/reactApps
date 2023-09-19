import axios from "axios"
const BASE_REST_API_URL_INFRASTURCTURE_ITEMS = 'http://localhost:1003/api/'

class InfrastructureServices{
    getAllInfrastructure(){
        return axios.get(BASE_REST_API_URL_INFRASTURCTURE_ITEMS + "getAllInfrastructure")
    }

    getAllInfrastructureItems(){
        return axios.get(BASE_REST_API_URL_INFRASTURCTURE_ITEMS + "getAllInfrastructureItems")
    }

    getInfrastructureByItemId(itemid){
        return axios.get(BASE_REST_API_URL_INFRASTURCTURE_ITEMS + "menuItem/" + itemid)
    }
    addInfrastructure(menu){
        return axios.post(BASE_REST_API_URL_INFRASTURCTURE_ITEMS + "addInfrastructure", menu)
    }

    updateInfrastructure(itemId, menu){
        return axios.put(BASE_REST_API_URL_INFRASTURCTURE_ITEMS + "updateInfrastructure/" + itemId, menu)
    }
    deleteInfrastructure(itemId){
        return axios.delete(BASE_REST_API_URL_INFRASTURCTURE_ITEMS + "deleteInfrastructure/" + itemId)
    }
}

export default new InfrastructureServices()
