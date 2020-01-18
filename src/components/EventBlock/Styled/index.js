import styled, { css } from "styled-components"

export const EventBlock = styled.div`
  transition: 0.3s;
  position: relative;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const InfoContainer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 4;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  background-color: rgb(16, 16, 16, 0.4);
  box-sizing: border-box;
  padding: 15px;
  transition: 0.2s;
  &&:hover {
    cursor: pointer;
    background-color: rgb(255, 215, 0, 0.6);
  }
`

const TextSharedStyle = css`
  ${InfoContainer}:hover & {
    color: black;
  }
  margin: 0;
`

export const Title = styled.p`
  font-size: 20px;
  ${TextSharedStyle};
`
export const Time = styled.p`
  ${TextSharedStyle};
`
export const Location = styled.p`
  ${TextSharedStyle};
`
