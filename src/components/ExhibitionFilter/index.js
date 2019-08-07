import React from "react"
import { connect } from "react-redux"

import Filter from "./components/Filter"
import { Container, Title, FilterContainer } from "./Styled"

const ExhibitionFilter = () => {
  return (
    <Container>
      <Title>Filter</Title>
      <FilterContainer>
        <Filter filter={`all`} />
        <Filter filter={`open`} />
        <Filter filter={`closed`} />
        <Filter filter={`opening soon`} />
      </FilterContainer>
    </Container>
  )
}

export default connect()(ExhibitionFilter)
