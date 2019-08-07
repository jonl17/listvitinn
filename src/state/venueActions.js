export const GET_CURRENT_EXHIBITIONS = "GET_CURRENT_EXHIBITIONS"
export const getCurrentExhibitions = list => ({
  type: GET_CURRENT_EXHIBITIONS,
  list,
})
export const GET_PAST_EXHIBITIONS = "GET_PAST_EXHIBITIONS"
export const getPastExhibitions = list => ({
  type: GET_PAST_EXHIBITIONS,
  list,
})
export const INIT_VENUES = "INIT_VENUES"
export const initVenues = venues => ({
  type: INIT_VENUES,
  venues,
})
