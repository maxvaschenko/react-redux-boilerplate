import {START_APP} from "../type/app";

export function startApp() {
    return async (dispatch) => {
        try{
            await dispatch({
                type: START_APP,
            })
        } catch (e){
            //ignore
        }
    }
}