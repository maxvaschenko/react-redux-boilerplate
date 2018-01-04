import {createReducer} from "../utils/index";
import * as types from "../type/app";

const initialState = {
    showSideBar: false,
};

export default createReducer(initialState, {
    [types.SHOW_SIDEBAR]: (state) => {
        return {
            ...state,
            showSideBar: true
        };
    },
    [types.HIDE_SIDEBAR]: (state) => {
        return {
            ...state,
            showSideBar: false
        };
    },
});