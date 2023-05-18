import axios from "axios"
import { BASE_URL, API_KEY_PARAM } from "../config"

export class TVShowAPI {

    static async fetchPopulars(){
        const res = await axios.get(BASE_URL + "tv/popular" + API_KEY_PARAM)
        return res.data.results
    }

    static async fetchRecommendations(TVShowId){
        const res = await axios.get(`${BASE_URL}/tv/${TVShowId}/recommendations${API_KEY_PARAM}`)
        // console.log("test", res.data.results)
        return res.data.results
    }
}