import React from "react"
import PropTypes from "prop-types"

const CardContent = (props) => {
  let { idx, isSmall, content, isOverlaying } = props

  let { title, description, image_url } = content

  return (
    <div className={`landing-card ${isSmall ? "card-small" : ""} ${isOverlaying ? "hidden" : ""}`} key={idx}>
      <h2>{title}</h2>
      <p>{description}</p>

      <img src={image_url} alt={title} />
    </div>
  )
}

CardContent.propTypes = {
  clsasName: PropTypes.string,
  isSmall: PropTypes.bool,
}

CardContent.defaultProps = {
  className: "",
  isSmall: false,
}

export default CardContent
