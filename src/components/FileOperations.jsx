import React from "react"
import { useDispatch } from "react-redux"

const FileOperations = () => {
  const dispatch = useDispatch()

  //
  // load scene
  //
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

    const project = await file.getFile()

    loadScene(project)
    console.log("file loaded")
  }

  //
  // save the repo to the file system
  //
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

      const content = JSON.stringify(store.getState(), null, 2)
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
