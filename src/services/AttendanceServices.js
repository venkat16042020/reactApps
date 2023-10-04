import axios from "axios"
const BASE_REST_API_URL_ATTENDANCE = 'http://localhost:1003/api/'

class AttendanceServices{
    getAllAttendance(){
        return axios.get(BASE_REST_API_URL_ATTENDANCE + "getAllAttendance")
    }
    getAttendanceByAttendanceId(attendanceId){
        return axios.get(BASE_REST_API_URL_ATTENDANCE + "attendance/" + attendanceId)
    }
    addAttendance(attendance){
        return axios.post(BASE_REST_API_URL_ATTENDANCE + "addAttendance", attendance)
    }

    updateAttendance(attendanceId, attendance){
        return axios.put(BASE_REST_API_URL_ATTENDANCE + "updateAttendance/" + attendanceId, attendance)
    }
    deleteAttendance(attendanceId){
        return axios.delete(BASE_REST_API_URL_ATTENDANCE + "deleteAttendance/" + attendanceId)
    }
}

export default new AttendanceServices()
