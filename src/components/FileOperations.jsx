import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadScene, resetProject } from "../state/projectReducer"
import { resetEditor, setActiveScene } from "../state/editorReducer"

const FileOperations = () => {
  const dispatch = useDispatch()
  const project = useSelector((state) => state.project)

  // load scene from file system
  const handleLoadScene = async () => {
    const opts = {
      types: [
        {
          description: "JSON project files",
          accept: {
            "text/JSON": [".json"],
          },
        },
      ],
      excludeAllOptions: true,
      multiple: false,
    }

    // show file picker
    const [file] = await window.showOpenFilePicker(opts)

    const data = await file.getFile()
    const text = await data.text()

    console.log(JSON.parse(text))

    dispatch(loadScene(JSON.parse(text)))

    // on load the activeScene is not set, set it to the first scene
    dispatch(setActiveScene(JSON.parse(text).default.firstScene))

    console.log("scene loaded")
  }

  // save scene to file system
  const handleSaveScene = async (event) => {
    const opts = {
      types: [
        {
          description: "JSON text file",
          accept: { "text/json": [".json"] },
        },
      ],
    }

    try {
      // pick a save file
      const writable = await (await window.showSaveFilePicker(opts)).createWritable()

      const content = JSON.stringify(project, null, 2)
      await writable.write(content)
      console.log("writing")
      await writable.close()
      console.log("closing")
    } catch (error) {
      console.log(error)
    }
  }

  const fileOps = [
    { name: "load", action: handleLoadScene },
    { name: "save", action: handleSaveScene },
    {
      name: "reset",
      action: () => {
        dispatch(resetProject())
        dispatch(resetEditor())
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
