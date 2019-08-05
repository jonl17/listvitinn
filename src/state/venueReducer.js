import { GET_CURRENT_EXHIBITIONS, GET_PAST_EXHIBITIONS } from "./venueActions"
export const initialState = {
  current: [],
  past: [],
}
const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_EXHIBITIONS:
      return { ...state, current: action.list }
    case GET_PAST_EXHIBITIONS:
      return { ...state, past: action.list }
    default:
      return state
  }
}

export default venueReducer
