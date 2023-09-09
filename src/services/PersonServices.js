import axios from "axios"
const BASE_REST_API_URL_PERSON = 'http://localhost:1003/api/'

class PersonServices{
    getAllPersons(){
        return axios.get(BASE_REST_API_URL_PERSON + "getAllPersons")
    }
    getPersonById(personId){
        return axios.get(BASE_REST_API_URL_PERSON + "person/" + personId)
    }
    addPerson(person){
        return axios.post(BASE_REST_API_URL_PERSON + "addPerson", person)
    }

    updatePerson(personId, person){
        return axios.put(BASE_REST_API_URL_PERSON + "updatePerson/" + personId, person)
    }
    deletePerson(personId){
        return axios.delete(BASE_REST_API_URL_PERSON + "deletePerson/" + personId)
    }
}

export default new PersonServices()
