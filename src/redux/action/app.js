import { SHOW_SIDEBAR, HIDE_SIDEBAR } from "../type/app";

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
}