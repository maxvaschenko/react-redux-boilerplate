import {createReducer} from "../utils/index";
import {
    GET_TRACKLIST,
    GET_TRACKLIST_ERROR
} from "../type/index";

const initialState = {
    data: null,
    error: false
};

export default createReducer(initialState, {
    [GET_TRACKLIST]: (state, payload) => {
        return {
            ...state,
            data: payload.feed.entry
        };
    },
    [GET_TRACKLIST_ERROR]: (state) => {
        return {
            ...state,
            error: true
        };
    }
});