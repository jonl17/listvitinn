import React from "react"
import { Provider } from "react-redux"
import { createStore as createListvitinnStore } from "redux"
import rootReducer from "./src/state/index"

const createStore = () => createListvitinnStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return <Provider store={createStore()}>{element}</Provider>
}
