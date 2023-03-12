import React from "react"

const PanoramaItem = ({ item, url }) => {
  return (
    <li>
      <img src={url} alt="item" />
      <p>{item}</p>
    </li>
  )
}

export default PanoramaItem
