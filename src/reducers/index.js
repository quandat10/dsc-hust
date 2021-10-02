import { combineReducers } from "redux";
import GetEventsReducer from "./GetEventsReducer";
import GetMemberReducer from "./GetMemberReducer";
import GetTokenReducer from "./GetTokenReducer";
export default combineReducers({
  events: GetEventsReducer,
  members: GetMemberReducer,
  token: GetTokenReducer,
});
