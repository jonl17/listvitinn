import { INIT_EXHIBITIONS, REMOVE_EXHIBITION } from "./actions"

export const initialState = {
  exhibitions: [],
}

// /* reducers */

const exhibitionReducer = (state = initialState, action) => {
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
    default:
      return { ...state }
  }
}

export default exhibitionReducer
