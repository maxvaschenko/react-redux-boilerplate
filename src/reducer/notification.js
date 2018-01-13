import {createReducer} from "../utils";

import * as types from "../type";

const initialState = {
    message: null,
};


export default createReducer(initialState, {
    [types.SHOW_NOTIFICATION]: (state, payload) => {
        return {
            ...state,
            message: payload,
        };
    },
    [types.HIDE_NOTIFICATION]: () => {
        return {
            ...initialState
        };
    },
});
