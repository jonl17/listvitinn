import {
  INIT_EXHIBITIONS,
  REMOVE_EXHIBITION,
  SET_EXHIBITION_FILTER,
} from "./actions"

export const initialState = {
  exhibitions: [],
  exhibitionFilter: `open`,
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
    case SET_EXHIBITION_FILTER:
      return { ...state, exhibitionFilter: action.filter }
    default:
      return { ...state }
  }
}

export default reducer
