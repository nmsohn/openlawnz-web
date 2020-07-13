import React from "react"
import PropTypes from "prop-types"

const CardOverlay = (props) => {
  let { content, isOverlaying, hide } = props
  const { overlayTitle, overlayDescription, image_url } = content

  return isOverlaying ? (
    <div className={`card-overlay`}>
      <span id="close" onClick={hide}>
        x
      </span>
      <h2>{overlayTitle}</h2>
      <p>{overlayDescription}</p>
      <img src={image_url} alt={overlayTitle} />
    </div>
  ) : null
}

CardOverlay.propTypes = {
  data: PropTypes.object,
  isOverlaying: PropTypes.bool,
  hide: PropTypes.func,
}

export default CardOverlay
