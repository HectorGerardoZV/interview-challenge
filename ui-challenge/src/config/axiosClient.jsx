import axios from "axios";


const axiosClientSurvey = axios.create({
    baseURL: import.meta.env.VITE_URL_BACK,
})


export default axiosClientSurvey