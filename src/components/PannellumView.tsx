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
    // create a copy, dont mutate the original
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

/*
  render the converted scene
*/
const PannellumView = () => {
  const dispatch = useDispatch()
  const state = useSelector((state: IStore) => state)
  const panoramasFolder = useContext(appContext).panoramas!
  const view = useRef<viewer>()

  useEffect(() => {
    ;(async () => {
      try {
        /* create a preview */
        const preview = await resolveProject(state.project, panoramasFolder)
        if (!preview) {
          throw new Error("Failed to generate preview scene")
        }
        // create a panellum viewer, use preview as the scene
        view.current = window.pannellum.viewer("panorama", preview)

        // change the scene to the editor.activeScene after creation
        view.current?.loadScene(state.editor.activeScene)

        // restore rotation after loading
        view.current?.setPitch(state.editor.viewPitch, false)
        view.current?.setYaw(state.editor.viewYaw, false)

        // when stopped rotating, save yaw and pitch to the editor state
        view.current?.on("animatefinished", (data: { pitch: number; yaw: number }) => {
          const { yaw, pitch } = data

          dispatch(setViewAngles({ yaw: yaw.toFixed(2), pitch: pitch.toFixed(2) }))
        })
      } catch (error) {
        console.error(error)
      }
    })()

    return () => {
      // destroy the viewer
      view.current?.destroy()
    }
  }, [state.project, state.editor.activeScene])

  return <div id="panorama"></div>
}

export default PannellumView
