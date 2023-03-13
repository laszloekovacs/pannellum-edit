import React, { useContext, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { appContext } from "../contexts/AppContext"
import { IScene, IProjectState, IStore } from "../global"
import produce from "immer"
import { setViewAngles } from "../state/editorReducer"

// load the file from folder into an object url
const resolveFile = async (img: string, folder: FileSystemDirectoryHandle) => {
  try {
    //folder is a fileSystemDirectoryHandle
    const file = await folder.getFileHandle(img)
    // read the file into a blob
    const blob = await file.getFile()
    // create a URL from the blob
    return URL.createObjectURL(blob)
  } catch (error) {
    console.error(error)
  }
}

// loop trough the scenes and convert file names to blob urls
const resolveProject = async (project: IProjectState, rootFolder: FileSystemDirectoryHandle) => {
  try {
    // mutate the copy
    const preview = produce(project, async (draft) => {
      // not an array, use weird for...of
      for (let scene of Object.values(draft.scenes)) {
        const img = await resolveFile(scene.panorama, rootFolder)

        if (!img) {
          throw new Error("Panorama not found " + img)
        }
        scene.panorama = img
      }
    })
    return preview
  } catch (error) {
    console.error(error)
  }
}

// note: storing the viewer in a ref did not seem to work

const PannellumView = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: IStore) => state)
  const panoramasFolder = useContext(appContext).panoramas!

  useEffect(() => {
    ;(async () => {
      try {
        /* create a preview */
        let preview = await resolveProject(state.project, panoramasFolder)
        if (!preview) {
          throw new Error("Failed to generate preview scene")
        }
        //
        // WARNING: use a MUTABLE COPY of preview.
        // for some reason, pannellum does mutate the scene object
        //
        window.viewer = window.pannellum.viewer("panorama", JSON.parse(JSON.stringify(preview)))

        if (window.viewer) {
          // change the scene to the editor.activeScene after creation
          // make copies
          const [scene, pitch, yaw] = [state.editor.activeScene, state.editor.viewPitch, state.editor.viewYaw]
          window.viewer.loadScene(scene)

          // when stopped rotating, save yaw and pitch to the editor state
          window.viewer.on("animatefinished", (data: { pitch: number; yaw: number }) => {
            if (!data || !data.pitch || !data.yaw) {
              return
            }

            dispatch(setViewAngles({ pitch: data.pitch, yaw: data.yaw }))
          })

          // dump our preview object to the console
          window.viewer.on("error", (message) => {
            console.log("preview error: " + message)
            console.log(preview)
          })
        }
      } catch (error) {
        console.error(error)
      }
    })()

    return () => {
      // destroy the viewer
      if (window.viewer) {
        window.viewer.destroy()
      }
    }
  }, [state.project, state.editor.activeScene])

  return <div id="panorama"></div>
}

export default PannellumView
