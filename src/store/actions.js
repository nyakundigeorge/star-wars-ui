import {FETCH_NEWS} from './actionTypes'
import apiService from '@/services/api/ApiService';
import {NYT_NEWS} from "@/services/api/endpoints";
import {SET_NEWS} from "./mutationsTypes";

export default {
    async [FETCH_NEWS]({commit}){
        try {
            const {
                data:{ results }
            } = await apiService.get(NYT_NEWS.NEWS_CONTENT);

            commit(SET_NEWS,{
                results
            });

            // eslint-disable-next-line no-console
            // console.log(results)
        }catch (e) {
            // eslint-disable-next-line no-console
            console.log("Error in Fetching News" + e)
        }
    }
}