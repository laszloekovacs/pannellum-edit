import React from "react"
import { useSelector } from "react-redux"
import Hotspot from "./HotspotItem"

const HotspotList = () => {
  const activeSceneName = useSelector((state) => state.editor.activeScene)
  const scenes = useSelector((state) => state.project.scenes)
  const keys = Object.keys(scenes)

  // no scenes
  if (activeSceneName == null || keys.length == 0) return null

  // no hotspots
  if (scenes[activeSceneName]?.hotSpots?.length == 0) return null

  const activeScene = scenes[activeSceneName]
  const hotSpots = activeScene.hotSpots

  return (
    <div>
      <h2>HotspotList</h2>
      {hotSpots.length == 0 ? (
        <p>no hotspots</p>
      ) : (
        <ul>
          {hotSpots.map((spot, i) => (
            <Hotspot key={i} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default HotspotList
