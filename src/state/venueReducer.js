import {
  GET_CURRENT_EXHIBITIONS,
  GET_PAST_EXHIBITIONS,
  INIT_VENUES,
} from "./venueActions"
export const initialState = {
  venues: [],
  current: [],
  past: [],
}
const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_VENUES:
      return {
        ...state,
        venues: [...action.venues],
      }
    case GET_CURRENT_EXHIBITIONS:
      return { ...state, current: action.list }
    case GET_PAST_EXHIBITIONS:
      return { ...state, past: action.list }
    default:
      return state
  }
}

export default venueReducer
