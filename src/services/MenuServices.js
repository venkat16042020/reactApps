import axios from "axios"
const BASE_REST_API_URL_MENU_ITEMS = 'http://localhost:1003/api/'

class MenuServices{
    getAllMenu(){
        return axios.get(BASE_REST_API_URL_MENU_ITEMS + "getAllMenu")
    }

    getAllMenuItems(){
        return axios.get(BASE_REST_API_URL_MENU_ITEMS + "getAllMenuItems")
    }

    getMenuByItemId(itemid){
        return axios.get(BASE_REST_API_URL_MENU_ITEMS + "menuItem/" + itemid)
    }
    addMenu(menu){
        return axios.post(BASE_REST_API_URL_MENU_ITEMS + "addMenu", menu)
    }

    updateMenu(itemId, menu){
        return axios.put(BASE_REST_API_URL_MENU_ITEMS + "updateMenu/" + itemId, menu)
    }
    deleteMenu(itemId){
        return axios.delete(BASE_REST_API_URL_MENU_ITEMS + "deleteMenu/" + itemId)
    }
}

export default new MenuServices()
