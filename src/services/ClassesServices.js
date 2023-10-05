import axios from "axios"
const BASE_REST_API_URL_CLASSES = 'http://localhost:1003/api/'

class ClassesServices{
    getAllClasses(){
        return axios.get(BASE_REST_API_URL_CLASSES + "getAllClasses")
    }
    getClassesByClassesId(classesId){
        return axios.get(BASE_REST_API_URL_CLASSES + "classes/" + classesId)
    }
    addClasses(classes){
        return axios.post(BASE_REST_API_URL_CLASSES + "addClasses", classes)
    }

    updateClasses(classesId, classes){
        return axios.put(BASE_REST_API_URL_CLASSES + "updateClasses/" + classesId, classes)
    }
    deleteClasses(classesId){
        return axios.delete(BASE_REST_API_URL_CLASSES + "deleteClasses/" + classesId)
    }
}

export default new ClassesServices()
