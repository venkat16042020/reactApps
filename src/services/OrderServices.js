import axios from "axios"
const BASE_REST_API_URL_ORDER = 'http://localhost:1003/api/'

class OrderServices{
    getAllOrders(){
        return axios.get(BASE_REST_API_URL_ORDER + "getAllOrder")
    }
    getOrderById(orderId){
        return axios.get(BASE_REST_API_URL_ORDER + "Order/" + orderId)
    }
    addOrder(order){
        return axios.post(BASE_REST_API_URL_ORDER + "addOrder", order)
    }

    updateOrder(orderId, order){
        return axios.put(BASE_REST_API_URL_ORDER + "updateOrder/" + orderId, order)
    }
    deleteOrder(orderId){
        return axios.delete(BASE_REST_API_URL_ORDER + "deleteOrder/" + orderId)
    }
}

export default new OrderServices()