import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
      font-family: "Work Sans", sans-serif;
    }
    html,
    body {
      height: 100%;
      width: 100%;
      margin: 0;
      box-sizing: border-box;
    }
    body {
      background-color: white;
    }
    em {
      font-size: 12px;
      opacity: 0.8;
    }
`
