import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { createScene, setFirstScene } from "../state/projectReducer"
import { setActiveScene } from "../state/editorReducer"

const PanoramaItem = ({ item, url }) => {
  const dispatch = useDispatch()
  const scenes = useSelector((state) => state.project.scenes)
  const keys = Object.keys(scenes)
  const firstScene = useSelector((state) => state.project.default.firstScene)
  const activeScene = useSelector((state) => state.editor.activeScene)

  const handleAddScene = (event) => {
    /* add to the scene */
    dispatch(createScene({ title: item }))

    /* if no active scene is set for the editor, set this one */
    if (!activeScene) {
      dispatch(setActiveScene(item))
    }

    /* if no first scene is set, set this item */
    if (!firstScene) {
      dispatch(setFirstScene(item))
    }
  }

  return (
    <li>
      <img src={url} alt={url} />
      <p>{item}</p>

      <button disabled={keys.includes(item)} onClick={handleAddScene}>
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
