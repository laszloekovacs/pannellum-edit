import React from "react"
import { handleLoadScene, handleSaveScene } from "../actions/fileoperations"
import { useDispatch } from "react-redux"

const FileOperations = () => {
  const dispatch = useDispatch()

  const fileOps = [
    { name: "load", action: handleLoadScene },
    { name: "save", action: handleSaveScene },
    {
      name: "reset",
      action: () => {
        dispatch({ type: "reset" })
        console.log("scene reset")
      },
    },
  ]

  return (
    <div>
      {fileOps.map((item) => (
        <button key={item.name} onClick={item.action}>
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default FileOperations
