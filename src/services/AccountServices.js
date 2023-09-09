import axios from "axios"
const BASE_REST_API_URL_PERSON = 'http://localhost:1003/api/'

class AccountServices{
    getAllAccounts(){
        return axios.get(BASE_REST_API_URL_PERSON + "getAllAccounts")
    }
    getAccountById(accountId){
        return axios.get(BASE_REST_API_URL_PERSON + "account/" + accountId)
    }
    addAccount(account){
        return axios.post(BASE_REST_API_URL_PERSON + "addAccount", account)
    }

    updateAccount(accountId, account){
        return axios.put(BASE_REST_API_URL_PERSON + "updateAccount/" + accountId, account)
    }
    deleteAccount(accountId){
        return axios.delete(BASE_REST_API_URL_PERSON + "deleteAccount/" + accountId)
    }
}

export default new AccountServices()