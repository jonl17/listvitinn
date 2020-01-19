import React from "react"

/** components */
import { Star, Container } from "./Styled"

class FavouriteButton extends React.Component {
  componentDidMount() {
    console.log("get off!")
  }
  render() {
    const { selected } = this.props
    return (
      <Container>
        <Star selected={selected}></Star>
      </Container>
    )
  }
}

export default FavouriteButton
