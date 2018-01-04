import {GET_URL} from "../type/app";

export const $url= (url) => {
    return async (dispatch) => {
        try{
            await dispatch({
                type: GET_URL,
                payload: url
            })
        } catch (e){
            console.log(e)
        }
    }
}