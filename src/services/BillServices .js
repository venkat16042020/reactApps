import axios from "axios"
const BASE_REST_API_URL_Bill = 'http://localhost:1003/api/'

class BillServices{
    getAllBill(){
        return axios.get(BASE_REST_API_URL_Bill + "getAllBill")
    }
    getBillById(billId){
        return axios.get(BASE_REST_API_URL_Bill + "bill/" + billId)
    }
    addBill(bill){
        return axios.post(BASE_REST_API_URL_Bill + "addBill", bill)
    }

    updateBill(billId, bill){
        return axios.put(BASE_REST_API_URL_Bill + "updateBill/" + billId, bill)
    }
    deleteBill(billId){
        return axios.delete(BASE_REST_API_URL_Bill + "deleteBill/" + billId)
    }
}

export default new BillServices()
