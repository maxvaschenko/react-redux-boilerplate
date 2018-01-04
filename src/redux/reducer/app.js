import {createReducer} from "../utils/index";
import {
    GET_URL,
} from "../type/app";

const initialState = {
    loading: true,
    error: null,
    url: ''
};

const GET = (state, payload) => {
    return {
        ...state,
        loading: false,
        url: payload
    };
};




export default createReducer(initialState, {
    [GET_URL]:GET,
});