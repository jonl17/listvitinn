import styled from "styled-components"

export const EventBlock = styled.div`
  transition: 0.3s;
  position: relative;
  min-height: 200px;
  height: 250px;
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &&:hover {
    cursor: pointer;
  }
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
`

export const Title = styled.h1`
  font-size: 25px;
  margin: 0;
`
export const Time = styled.p`
  margin: 0;
`
export const Location = styled.p`
  margin: 0;
`
