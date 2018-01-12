import {createReducer} from "../utils/index";
import {
    GET_TRACKLIST,
    GET_TRACKLIST_ERROR
} from "../type/index";
import {LIKE_TRACK} from "../type";

const initialState = {
    data: null,
    liked: [],
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
    },
    [LIKE_TRACK]: (state, payload) => {
        console.log('payload', payload);
        return {
            ...state,
            liked: [
                ...state.liked,
                payload
            ]
        };
    }
});