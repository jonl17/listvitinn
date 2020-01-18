import styled, { css } from "styled-components"

export const Container = styled.div`
  height: 35px;
  display: inline-flex;
  width: 70px;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
  &&:hover {
    cursor: pointer;
  }
`
export const Text = styled.p`
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  box-sizing: border-box;
  transition: 0.1s ease-in-out;
  ${props =>
    props.selected &&
    css`
      background: gray;
      color: white;
    `}
`
