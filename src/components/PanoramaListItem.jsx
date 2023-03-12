import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { createScene } from "../state/projectReducer"

const PanoramaItem = ({ item, url }) => {
  const dispatch = useDispatch()
  const scenes = Object.keys(useSelector((state) => state.project.scenes))

  return (
    <li>
      <img src={url} alt={url} />
      <p>{item}</p>
      <button
        disabled={scenes.includes(item)}
        onClick={() => {
          dispatch(createScene({ title: item }))
        }}
      >
        add
      </button>
    </li>
  )
}

export default PanoramaItem
