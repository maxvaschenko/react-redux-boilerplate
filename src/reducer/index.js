import {combineReducers} from "redux";
import app from "./app"
import albums from "./albums"
import notification from "./notification"

const rootReducer = combineReducers({
    app,
    albums,
    notification
});

export default rootReducer;