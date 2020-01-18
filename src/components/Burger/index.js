import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { triggerMenu } from "../../state/actions"

/** components */
import { Burger, LineOne, LineTwo, LineThree } from "./Styled"

export default () => {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.reducer.menu)
  return (
    <Burger onClick={() => dispatch(triggerMenu())}>
      {menu === `closed` ? (
        <>
          <LineOne></LineOne>
          <LineTwo></LineTwo>
          <LineThree></LineThree>
        </>
      ) : (
        <>
          <LineOne ex></LineOne>
          <LineTwo ex></LineTwo>
        </>
      )}
    </Burger>
  )
}
