import {createReducer} from "../utils/index";
import {
    GET_TRACKLIST,
    GET_TRACKLIST_ERROR
} from "../type/index";
import {LIKE_TRACK, UNLIKE_TRACK} from "../type";

const initialState = {
    data: null,
    likedItems: [],
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
        return {
            ...state,
            likedItems: [
                ...state.likedItems,
                payload
            ]
        };
    },
    [UNLIKE_TRACK]: (state, payload) => {
        const likedItems = state.likedItems.filter(item => item!==payload);
        return {
            ...state,
            likedItems: [
                ...likedItems
            ]
        };
    }
});