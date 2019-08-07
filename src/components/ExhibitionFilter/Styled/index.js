import styled, { css } from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  padding: 25px;
  display: inline-block;
  border-radius: 15px;
`
export const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`
export const Title = styled.p`
  margin: 0;
`
export const FilterButton = styled.button`
  border-radius: 5px;
  border: 1px solid rgba(16, 16, 16, 0.8);
  background-color: white;
  color: rgba(16, 16, 16, 0.8);
  height: 25px;
  &&:hover {
    cursor: pointer;
    background-color: rgba(16, 16, 16, 0.8);
    border-color: white;
    color: white;
  }
  ${props =>
    props.chosenFilter === props.filter &&
    css`
      background-color: rgba(16, 16, 16, 0.8);
      border-color: white;
      color: white;
    `}
`
