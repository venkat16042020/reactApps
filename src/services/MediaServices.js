import axios from "axios"
const BASE_REST_API_URL_MEDIA = 'http://localhost:1003/api/'

class MediaServices{
    getAllMedia(){
        return axios.get(BASE_REST_API_URL_MEDIA + "getAllMedia")
    }
    getMediaByMediaId(mediaId){
        return axios.get(BASE_REST_API_URL_MEDIA + "media/" + mediaId)
    }
    addMedia(media){
        return axios.post(BASE_REST_API_URL_MEDIA + "addMedia", media)
    }

    updateMedia(mediaId, media){
        return axios.put(BASE_REST_API_URL_MEDIA + "updateMedia/" + mediaId, media)
    }
    deleteMedia(mediaId){
        return axios.delete(BASE_REST_API_URL_MEDIA + "deleteMedia/" + mediaId)
    }
}

export default new MediaServices()
