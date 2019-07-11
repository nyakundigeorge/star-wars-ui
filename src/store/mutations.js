import {SET_NEWS} from "./mutationsTypes";

export default {
    [SET_NEWS](currentState,payload){
        currentState.news = payload;
    }
}