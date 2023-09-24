import AdminReducer from "../Reducers/AdminReducer";

import {combineReducers} from "redux"


const AllReducers = combineReducers({

    Admin:AdminReducer
})

export default AllReducers