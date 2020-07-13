import React from "react"
import PropTypes from "prop-types"
import CardOverlay from "./CardOverlay"
import CardContent from "./CardContent"
import { toSlug } from "../../js/ToSlug"
import useToggle from "./useToggle"

const Card = (props) => {
  let { content, idx } = props

  const { state, toggle } = useToggle()

  return (
    <div className={"card-container"} onClick={toggle}>
      <CardContent
        slug={`/get-empowered/${content.fields.slug}${toSlug(content.content[0].title)}`}
        key={idx}
        content={content}
        isOverlaying={state}
      />
      <CardOverlay content={content} isOverlaying={state} hide={toggle} />
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.object,
  idx: PropTypes.number,
}

export default Card
