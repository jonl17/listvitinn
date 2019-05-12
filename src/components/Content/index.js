import React from "react"
import "./index.css"

const Content = ({ children }) => {
  return (
    <div className="Content-wrapper">
      <p className="frontpage-description">
        On this site you will find all the important Fine Art Exhibitions in
        Iceland
      </p>
      <h2 className="frontpage-title">Recently added:</h2>
      <div className="Event-container">{children}</div>
    </div>
  )
}

export default Content
