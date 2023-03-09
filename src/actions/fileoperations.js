import { loadScene } from "../state/projectReducer"
import { store } from "../state/store"

//
// load scene
//
export const handleLoadScene = async () => {
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
export const handleSaveScene = async (event) => {
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
    const writable = await (
      await window.showSaveFilePicker(opts)
    ).createWritable()

    const content = JSON.stringify(store.getState(), null, 2)
    await writable.write(content)
    console.log("writing")
    await writable.close()
    console.log("closing")
  } catch (error) {
    console.log(error)
  }
}
