import {createReducer} from "../utils/index";
import {
    START_APP,
} from "../type/index";

const initialState = {
    loading: true,
};

export default createReducer(initialState, {

    [START_APP]: (state) => {
        return {
            ...state,
            loading: false,
        };
    }
});