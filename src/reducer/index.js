import {combineReducers} from "redux";
import app from "./app"
import albums from "./albums"

const rootReducer = combineReducers({
    app,
    albums
});

export default rootReducer;