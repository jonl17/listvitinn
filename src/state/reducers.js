import { INIT_EXHIBITIONS, REMOVE_EXHIBITION, INIT_VENUES } from "./actions"

export const initialState = {
  exhibitions: [],
  venues: [],
}

// /* reducers */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_EXHIBITIONS:
      return {
        ...state,
        exhibitions: [...action.exhibitions],
      }
    case REMOVE_EXHIBITION:
      let newList = state.exhibitions
      newList.splice(action.index, 1)
      return { ...state, exhibitions: [...newList] }
    case INIT_VENUES:
      return {
        ...state,
        venues: [...action.venues],
      }
    default:
      return { ...state }
  }
}

export default reducer
