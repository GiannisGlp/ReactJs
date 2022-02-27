import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import placesReducer from "./placesReducer";




const rootReducer =combineReducers({
    users:usersReducer,
    places:placesReducer
})

export default rootReducer