import React from "react"
import "./index.css"
import Img from "gatsby-image"

export default props => (
  <div className="Event-block">
    <div className="Event-info-container">
      <h1 className="Event-title">{props.title}</h1>
      <p className="Event-days">{props.time}</p>
      <em className="Event-location">@ {props.location}</em>
    </div>
    <Img fluid={props.image} />
  </div>
)
