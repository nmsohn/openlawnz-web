import React, { useRef } from "react"
import PropTypes from "prop-types"
import CardOverlay from "./CardOverlay"
import CardContent from "./CardContent"
import { toSlug } from "../../js/ToSlug"
import useToggle from "./useToggle"
import useComponentSize from "@rehooks/component-size"
import cn from "classnames"

const Card = (props) => {
  let { classNames, content, idx } = props

  const { state, toggle } = useToggle()
  let ref = useRef(null)
  let size = useComponentSize(ref)
  let { height } = size

  const customClasses = cn("card-container", classNames ? classNames : "")

  return (
    <div className={customClasses} onClick={toggle} ref={ref}>
      <CardContent
        slug={`/get-empowered/${content.fields.slug}${toSlug(content.content[0].title)}`}
        key={idx}
        content={content}
        isOverlaying={state}
      />
      <CardOverlay content={content} isOverlaying={state} hide={toggle} size={height} />
    </div>
  )
}

Card.propTypes = {
  content: PropTypes.object,
  idx: PropTypes.number,
}

export default Card
