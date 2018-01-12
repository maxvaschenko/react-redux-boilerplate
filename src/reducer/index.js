import {combineReducers} from "redux";
import app from "./app"
import tracks from "./tracks"

const rootReducer = combineReducers({
    app,
    tracks
});

export default rootReducer;