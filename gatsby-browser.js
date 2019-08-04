import React from "react"
import { Provider } from "react-redux"
import { createStore as createListvitinnStore } from "redux"
import rootReducer from "./src/state/index"
import { GlobalStyle } from "./src/components/GlobalStyle"
import Haus from "./src/components/Haus"
import Footer from "./src/components/Footer"

const createStore = () => createListvitinnStore(rootReducer)

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>
      <GlobalStyle />
      {element}
    </Provider>
  )
}
