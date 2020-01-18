import { combineReducers } from "redux"
import reducer from "./reducer"
import venueReducer from "./venueReducer"

export default combineReducers({ reducer, venueReducer })
