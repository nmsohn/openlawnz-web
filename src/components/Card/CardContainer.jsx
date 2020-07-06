import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import CardOverlay from "./CardOverlay"
import Card from "./Card"
import { toSlug } from "../../js/ToSlug"
import useToggle from "./useToggle"

const CardContainer = (props) => {
  let { data } = props

  const height = data.size * 300

  const { state, toggle } = useToggle()

  return (
    <div className={"card-container"} styles={{ width: `${height}` }} onClick={toggle}>
      {data.map((content, idx) => (
        <Card
          slug={`/get-empowered/${content.fields.slug}${toSlug(content.content[0].title)}`}
          key={idx}
          content={content}
        />
      ))}
      <CardOverlay isOverlaying={state} hide={toggle} />
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object,
}

export default CardContainer
