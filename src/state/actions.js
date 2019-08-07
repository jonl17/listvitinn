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
