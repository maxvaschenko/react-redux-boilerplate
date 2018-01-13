import {createReducer} from "../utils/index";
import * as types from "../type/index";

const initialState = {
    data: null,
    likedItems: [],
    error: false
};

export default createReducer(initialState, {
    [types.GET_ALBUM_LIST]: (state, payload) => {
        return {
            ...state,
            data: payload.feed.entry
        };
    },
    [types.GET_ALBUM_LIST_ERROR]: (state) => {
        return {
            ...state,
            error: true
        };
    },
    [types.LIKE_ALBUM]: (state, payload) => {
        return {
            ...state,
            likedItems: [
                ...state.likedItems,
                payload
            ]
        };
    },
    // [GET_LIKED_TRACKS]: (state, payload) => {
    //     console.log('payload', payload);
    //     return {
    //         ...state,
    //         likedItems: [
    //             ...payload
    //         ]
    //     };
    // },
    [types.UNLIKE_ALBUM]: (state, payload) => {
        const likedItems = state.likedItems.filter(item => item!==payload);
        return {
            ...state,
            likedItems: [
                ...likedItems
            ]
        };
    }
});