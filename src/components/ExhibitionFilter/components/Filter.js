import React from "react"
import { connect } from "react-redux"
import { setExhibitionFilter } from "../../../state/actions"

import { FilterButton } from "../Styled"

const Filter = ({ filter, chosenFilter, dispatch }) => {
  return (
    <FilterButton
      filter={filter}
      chosenFilter={chosenFilter}
      onClick={() => dispatch(setExhibitionFilter(filter))}
    >
      {filter}
    </FilterButton>
  )
}

const mapStateToProps = state => ({
  chosenFilter: state.reducer.exhibitionFilter,
})

export default connect(mapStateToProps)(Filter)
