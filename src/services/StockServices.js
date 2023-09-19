import axios from "axios"
const BASE_REST_API_URL_STOCK = 'http://localhost:1003/api/'

class StockServices{
    getAllStock(){
        return axios.get(BASE_REST_API_URL_STOCK + "getAllStock")
    }

    getAllStock(){
        return axios.get(BASE_REST_API_URL_STOCK + "getAllStock")
    }

    getStockByStockId(stockId){
        return axios.get(BASE_REST_API_URL_STOCK + "stock/" + stockId)
    }
    addStock(stock){
        return axios.post(BASE_REST_API_URL_STOCK + "addStock", stock)
    }

    updateStock(stockId, stock){
        return axios.put(BASE_REST_API_URL_STOCK + "updateStock/" + stockId, stock)
    }
    deleteStock(stockId){
        return axios.delete(BASE_REST_API_URL_STOCK + "deleteStock/" + stockId)
    }
}

export default new StockServices()
