import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { createScene, setFirstScene } from "../state/projectReducer"

const PanoramaItem = ({ item, url }) => {
  const dispatch = useDispatch()
  const scenes = useSelector((state) => state.project.scenes)
  const keys = Object.keys(scenes)
  const firstScene = useSelector((state) => state.project.default.firstScene)

  return (
    <li>
      <img src={url} alt={url} />
      <p>{item}</p>

      <button
        disabled={keys.includes(item)}
        onClick={() => {
          dispatch(createScene({ title: item }))
        }}
      >
        add
      </button>

      {keys.includes(item) && (
        <button disabled={item == firstScene} onClick={() => dispatch(setFirstScene(item))}>
          set as first
        </button>
      )}
    </li>
  )
}

export default PanoramaItem
