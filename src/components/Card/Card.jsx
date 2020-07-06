import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import { Link } from "gatsby"

const Card = (props) => {
  let { className, idx, slug, isSmall, content, ...attrs } = props

  let { title, description, image_url } = content

  const customClasses = cn(className, "landing-card", isSmall && "card-small")

  return (
    <div className={customClasses} key={idx} {...attrs}>
      <h2>{title}</h2>
      <p>{description}</p>

      <img src={image_url} alt={title} />
    </div>
  )
}

Card.propTypes = {
  clsasName: PropTypes.string,
  isSmall: PropTypes.bool,
}

Card.defaultProps = {
  className: "",
  isSmall: false,
}

export default Card
