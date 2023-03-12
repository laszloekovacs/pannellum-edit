import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { setActiveScene } from "../state/editorReducer"

/* list out scenes, select it on click */
const SceneList = () => {
  const dispatch = useDispatch()
  const scenes = useSelector((state) => state.project.scenes)
  const keys = Object.keys(scenes)

  const selectScene = (title) => {
    dispatch(setActiveScene(title))
  }

  const sceneList = Object.values(scenes).map((scene, i) => {
    return (
      <tr key={keys[i]} onClick={() => selectScene(keys[i])}>
        <td>{scene.title}</td>
        <td>{scene.panorama}</td>
        <td>{scene.hotSpots.length}</td>
      </tr>
    )
  })

  return (
    <div>
      <h2>Scene List</h2>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>file</th>
            <th>hotspots</th>
          </tr>
        </thead>
        <tbody>{sceneList}</tbody>
      </table>
    </div>
  )
}

export default SceneList
