import { combineReducers } from "redux"
import reducers from "./reducers"
import venueReducer from "./venueReducer"

export default combineReducers({ reducers, venueReducer })
