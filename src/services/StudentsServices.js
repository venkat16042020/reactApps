import axios from "axios"
const BASE_REST_API_URL_STUDENTS = 'http://localhost:1003/api/'

class StudentsServices{
    getAllStudents(){
        return axios.get(BASE_REST_API_URL_STUDENTS + "getAllStudents")
    }
    getStudentsByStudentsId(studentsId){
        return axios.get(BASE_REST_API_URL_STUDENTS + "students/" + studentsId)
    }
    addStudents(students){
        return axios.post(BASE_REST_API_URL_STUDENTS + "addStudents", students)
    }

    updateStudents(studentsId, students){
        return axios.put(BASE_REST_API_URL_STUDENTS + "updateStudents/" + studentsId, students)
    }
    deleteStudents(studentsId){
        return axios.delete(BASE_REST_API_URL_STUDENTS + "deleteStudents/" + studentsId)
    }
}

export default new StudentsServices()
