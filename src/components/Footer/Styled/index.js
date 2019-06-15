import styled from "styled-components"

export const Container = styled.div`
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
  overflow: hidden;
`
export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 100px 150px auto;
  height: 100%;
  margin: 0;
  padding: 0;
  grid-template-areas: "right left ... ";
`
export const Info = styled.div`
  grid-area: left;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 25px;
`
