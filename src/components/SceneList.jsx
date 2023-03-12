import React from "react"
import { useSelector } from "react-redux"

/* list out scenes, select it on click */
const SceneList = () => {
  const entries = Object.values(useSelector((state) => state.project.scenes))

  const sceneList = entries.map((scene) => {
    return (
      <tr key={scene.title}>
        <td>{scene.title}</td>
        <td>{scene.panorama}</td>
        <td>{scene.hotSpots.length}</td>
      </tr>
    )
  })

  return (
    <div>
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
