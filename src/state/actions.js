/* action creators */

export const INIT_EXHIBITIONS = "INIT_EXHIBITIONS"
export const initExhibitions = exhibitions => ({
  type: INIT_EXHIBITIONS,
  exhibitions,
})

export const REMOVE_EXHIBITION = "REMOVE_EXHIBITION"
export const removeExhibtion = index => ({
  type: REMOVE_EXHIBITION,
  index,
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
