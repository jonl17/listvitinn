import React from "react"
import "./index.css"
import { Link } from "gatsby"

export default props => (
  <Link exact to={props.path}>
    <div
      style={{ backgroundImage: `url(${props.image})` }}
      className="Event-block"
    >
      <div className="Event-info-container">
        <h1 className="Event-title">{props.title}</h1>
        <p className="Event-days">{props.time}</p>
        <em className="Event-location">@ {props.location}</em>
      </div>
    </div>
  </Link>
)
