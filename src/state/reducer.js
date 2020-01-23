import {
  INIT_EXHIBITIONS,
  SET_EXHIBITION_FILTER,
  SET_DEVICE,
  TRIGGER_MENU,
  CHANGE_LANGUAGE,
  INIT_STARRED_EXHIBITION_SLUGS,
  INIT_STARRED_EXHIBITIONS,
  APPEND_FAVOURITE_EXHIBITION,
  REMOVE_FAVOURITE_EXHIBITION,
} from "./actions"

export const initialState = {
  device: undefined,
  exhibitions: [],
  exhibitionFilter: `open`,
  menu: `closed`,
  language: `icelandic`,
  starredExhibitions: [], // this one keeps actual exhibition objects
  starredExhibitionSlugs: [], // this one is exactly like the one stored in local storage
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
    case INIT_STARRED_EXHIBITION_SLUGS:
      return { ...state, starredExhibitionSlugs: action.slugs }
    case INIT_STARRED_EXHIBITIONS:
      return { ...state, starredExhibitions: action.exhibitions }
    case APPEND_FAVOURITE_EXHIBITION:
      if (window !== undefined) {
        localStorage.setItem(
          `starredExhibitions`, // we only want to save the slugs in local storage
          JSON.stringify([
            ...state.starredExhibitionSlugs,
            action.exhibition.slug,
          ])
        )
      }
      return {
        ...state,
        starredExhibitionSlugs: [
          ...state.starredExhibitionSlugs,
          action.exhibition.slug,
        ],
        starredExhibitions: [...state.starredExhibitions, action.exhibition],
      }
    case REMOVE_FAVOURITE_EXHIBITION:
      let newListOfSlugs = []
      for (var i = 0; i < state.starredExhibitionSlugs.length; i++) {
        if (state.starredExhibitionSlugs[i] !== action.exhibition.slug) {
          newListOfSlugs.push(state.starredExhibitionSlugs[i])
        }
      }
      if (window !== undefined) {
        localStorage.setItem(
          `starredExhibitions`,
          JSON.stringify(newListOfSlugs)
        )
      }
      return {
        ...state,
        starredExhibitionSlugs: newListOfSlugs,
      }
    default:
      return state
  }
}

export default reducer
