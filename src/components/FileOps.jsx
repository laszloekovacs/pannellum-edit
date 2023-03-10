import React from "react"
import { handleLoadScene, handleSaveScene } from "../actions/fileoperations"
import { useDispatch } from "react-redux"

const FileOps = () => {
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
    <div className="flex flex-row">
      {fileOps.map((item) => (
        <button key={item.name} className="hover:bg-purple-600 bg-purple-400 px-2 " onClick={item.action}>
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default FileOps
