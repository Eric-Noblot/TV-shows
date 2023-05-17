import axios from "axios"
const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY_PARAM = "?api_key=1f9388f787ea9db04b12bdc1f10ad4c7"

export class TVShowAPI {
    static async fetchPopulars(){
        const res = await axios.get(BASE_URL + "tv/popular" + API_KEY_PARAM)
        console.log(res.data.results)
        return res.data.results
    }
}