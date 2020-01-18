import {
  INIT_EXHIBITIONS,
  REMOVE_EXHIBITION,
  SET_EXHIBITION_FILTER,
  SET_DEVICE,
  TRIGGER_MENU,
} from "./actions"

export const initialState = {
  device: undefined,
  exhibitions: [],
  exhibitionFilter: `open`,
  menu: `closed`,
}

// /* reducers */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE:
      let device
      if (action.width <= 750) {
        device = `mobile`
      }
      if (action.width > 750 && action.width <= 1050) {
        device = `tablet`
      }
      if (action.width > 1050) {
        device = `browser`
      }
      return { ...state, device: device }
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
    case TRIGGER_MENU:
      let status
      if (state.menu === `closed`) {
        status = `open`
      } else {
        status = `closed`
      }
      return { ...state, menu: status }
    default:
      return { ...state }
  }
}

export default reducer
