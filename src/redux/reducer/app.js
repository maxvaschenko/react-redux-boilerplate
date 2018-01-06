import {createReducer} from "../utils/index";
import * as types from "../type/app";


const initialState = {
    error: null,
    showSideBar: false,
    data: null,
    firstComponent: null,
};

export default createReducer(initialState, {
    [types.SHOW_SIDEBAR]: (state) => {
        return {
            ...state,
            showSideBar: true,
            error: null
        };
    },
    [types.HIDE_SIDEBAR]: (state) => {
        return {
            ...state,
            showSideBar: false,
            error: null
        };
    },
    [types.INIT_APP]: (state, payload) => {
        return {
            ...state,
            showSideBar: payload.showSideBar,
            error: null
        };
    },
    [types.GET_DATA]: (state, payload) => {
        return {
            ...state,
            data: payload,
            error: null
        };
    },
    [types.GET_DATA_ERROR]: (state) => {
        return {
            ...state,
            error: true
        };
    },
});