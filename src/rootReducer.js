import { combineReducers } from "redux";
import AppReducer from './Services/reducer';
import profileReducer from './Services/profileReducer'

export default combineReducers({
    red: AppReducer,
    pro: profileReducer
})