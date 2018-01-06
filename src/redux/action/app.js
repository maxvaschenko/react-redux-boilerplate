import {SHOW_SIDEBAR, HIDE_SIDEBAR, INIT_APP, GET_DATA_ERROR, GET_DATA} from "../type/app";
import {loadState} from "../utils";
import componentLoader from "../../components/componentLoader";
import config from "../config";


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


export const $getData = () => {
    return (dispatch) => {
        try{
            fetch(config.tabsDataUrl)
                .then((response) => response.json())
                .then((json) => {
                    dispatch({
                        type: GET_DATA,
                        payload: json.sort((a, b) => a.order - b.order)
                    })
                })
                .catch((ex) => {
                    console.log('parsing failed', ex);
                    dispatch({
                        type: GET_DATA_ERROR,
                    })
                });

        } catch (e){
            console.log(e);
            dispatch({
                type: GET_DATA_ERROR,
            })
        }
    }
};




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

