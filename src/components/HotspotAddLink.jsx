import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHotSpot } from "../state/projectReducer"

// add link to another scene
const HotspotAddLink = () => {
  const [target, setTarget] = useState("")
  const editor = useSelector((state) => state.editor)
  const dispatch = useDispatch()

  const handleAddLink = (event) => {
    // get the view yaw and pitch, and the current scene id
    const [yaw, pitch, sceneId] = [editor.viewPitch, editor.viewYaw, editor.activeScene]

    const hotSpot = {
      pitch: pitch,
      yaw: yaw,
      type: "scene",
      text: target,
      sceneId: target,
    }
    console.log([hotSpot, yaw, pitch, sceneId])

    dispatch(addHotSpot({ sceneId, hotSpot }))
  }

  return (
    <div>
      <button onClick={handleAddLink}>link scene</button>
    </div>
  )
}

export default HotspotAddLink
