import React, { useState, useContext } from "react"
import FileSelector from "./FileSelector"

import { workingDirectoryContext } from "../contexts/WorkingDirectories"

// adds panorama to scene
//when user clicks a button, it shows the files located in the panoramas folder
// use the context api to get the path to the panoramas folder
const AddPanorama = () => {
  const [showPicker, setShowPicker] = useState(false)
  const context = useContext(workingDirectoryContext)

  const togglePicker = () => {
    setShowPicker(!showPicker)
  }

  return (
    <div>
      {!showPicker ? (
        <input type="button" value="add scene" onClick={togglePicker} />
      ) : (
        <FileSelector type="panorama" onClose={togglePicker} />
      )}
    </div>
  )
}

export default AddPanorama
