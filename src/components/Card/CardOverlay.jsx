import React from "react"
import PropTypes from "prop-types"

const CardOverlay = (props) => {
  let { data, isOverlaying, hide } = props

  return isOverlaying ? (
    <div className={"card-overlay"}>
      <span id="close" onClick={hide}>
        x
      </span>
      <p>content</p>
    </div>
  ) : null
}

CardOverlay.propTypes = {
  data: PropTypes.object,
  isOverlaying: PropTypes.bool,
  hide: PropTypes.func,
}

export default CardOverlay
