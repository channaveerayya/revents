import { combineReducers } from "redux";
import eventReducer from "../../Features/event/eventReducer";

const rootReducer = combineReducers({
    events:eventReducer
});
export default rootReducer;