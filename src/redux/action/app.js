import { SHOW_SIDEBAR, HIDE_SIDEBAR, INIT_APP } from "../type/app";
import {loadState} from "../utils";

export const $showSidebar= () => {
    return async (dispatch) => {
        try{
            await dispatch({
                type: SHOW_SIDEBAR,
            })
        } catch (e){
            console.log(e)
        }
    }
};

export const $hideSidebar= () => {
    return async (dispatch) => {
        try{
            await dispatch({
                type: HIDE_SIDEBAR,
            })
        } catch (e){
            console.log(e)
        }
    }
};

export const $initApp = () => {
    let persistedState = loadState();
    return async (dispatch) => {
        try{
            await dispatch({
                type: INIT_APP,
                payload: persistedState
            })
        } catch (e){
            console.log(e)
        }
    }
};
