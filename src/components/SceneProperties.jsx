import React from "react"
import { useSelector } from "react-redux"

const SceneProperties = () => {
  const activeScene = useSelector((state) => state.editor.activeScene)
  const scenes = useSelector((state) => state.project.scenes)

  const selected = scenes[activeScene] || null
  console.log(scenes)
  /* don't show if nothing is selected */
  if (selected == null) return null

  return (
    <div>
      <h2>Scene Properties</h2>
      <p>{selected.title}</p>
      <p>{selected.panorama}</p>
      <p>{selected.northOffset}</p>
    </div>
  )
}

export default SceneProperties
