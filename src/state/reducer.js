import {
  INIT_EXHIBITIONS,
  SET_EXHIBITION_FILTER,
  SET_DEVICE,
  TRIGGER_MENU,
  CHANGE_LANGUAGE,
  INIT_FAVOURITE_EXHIBITIONS,
  APPEND_FAVOURITE_EXHIBITION,
  REMOVE_FAVOURITE_EXHIBITION,
} from "./actions"

export const initialState = {
  device: undefined,
  exhibitions: [],
  exhibitionFilter: `open`,
  menu: `closed`,
  language: `icelandic`,
  starredExhibitions: [],
}

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
    case CHANGE_LANGUAGE:
      let language
      if (state.language === `icelandic`) {
        language = `english`
      } else {
        language = `icelandic`
      }
      return { ...state, language: language }
    case INIT_FAVOURITE_EXHIBITIONS:
      return { ...state, starredExhibitions: action.exhibitions }
    case APPEND_FAVOURITE_EXHIBITION:
      if (window !== undefined) {
        localStorage.setItem(
          `starredExhibitions`,
          JSON.stringify([...state.starredExhibitions, action.exhibition])
        )
      }
      return {
        ...state,
        starredExhibitions: [...state.starredExhibitions, action.exhibition],
      }
    case REMOVE_FAVOURITE_EXHIBITION:
      let newList = []
      for (var exhibition of state.starredExhibitions) {
        if (exhibition !== action.exhibition) {
          newList.push(exhibition)
        }
      }
      if (window !== undefined) {
        localStorage.setItem(`starredExhibitions`, JSON.stringify(newList))
      }
      return { ...state, starredExhibitions: newList }
    default:
      return state
  }
}

export default reducer
