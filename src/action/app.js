import {START_APP} from "../type/index";

export function $startApp() {
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