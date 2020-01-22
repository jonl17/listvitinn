export const INIT_EXHIBITIONS = "INIT_EXHIBITIONS"
export const initExhibitions = exhibitions => ({
  type: INIT_EXHIBITIONS,
  exhibitions,
})

export const SET_EXHIBITION_FILTER = "SET_EXHIBITION_FILTER"
export const setExhibitionFilter = filter => ({
  type: SET_EXHIBITION_FILTER,
  filter,
})
export const SET_DEVICE = "SET_DEVICE"
export const setDevice = width => ({
  type: SET_DEVICE,
  width,
})
export const TRIGGER_MENU = "TRIGGER_MENU"
export const triggerMenu = trigger => ({
  type: TRIGGER_MENU,
  trigger,
})
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
export const changeLanguage = () => ({
  type: CHANGE_LANGUAGE,
})
export const INIT_FAVOURITE_EXHIBITIONS = "INIT_FAVOURITE_EXHIBITIONS"
export const initStarredExhibitions = exhibitions => ({
  type: INIT_FAVOURITE_EXHIBITIONS,
  exhibitions,
})
export const APPEND_FAVOURITE_EXHIBITION = "APPEND_FAVOURITE_EXHIBITION"
export const appendStarredExhibition = exhibition => ({
  type: APPEND_FAVOURITE_EXHIBITION,
  exhibition,
})
export const REMOVE_FAVOURITE_EXHIBITION = "REMOVE_FAVOURITE_EXHIBITION"
export const removeStarredExhibition = exhibition => ({
  type: REMOVE_FAVOURITE_EXHIBITION,
  exhibition,
})
