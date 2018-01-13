import {createReducer} from "../utils";

import * as types from "../type";

const initialState = {
    message: null,
    type: '',
    time: null
};


export default createReducer(initialState, {
    [types.SHOW_NOTIFICATION]: (state, payload) => {
        return {
            ...state,
            message: payload.message,
            type: payload.type,
            time: payload.time
        };
    },
    [types.HIDE_NOTIFICATION]: () => {
        return {
            ...initialState
        };
    },
});
