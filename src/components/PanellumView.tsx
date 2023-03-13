import React, { useContext, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { appContext } from "../contexts/AppContext"
import { IScene, IProjectState, IStore } from "../global"

// load the file from folder into an object url
const resolvePanorama = async (img: string, folder: FileSystemDirectoryHandle) => {
  try {
    //assetFolder is a fileSystemDirectoryHandle
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
  const scenes = project.scenes

  try {
    // go trough all scenes. Not an array but key-value objects
    for (const scene in scenes) {
      const img = await resolvePanorama(scenes[scene].panorama, rootFolder)

      if (!img) {
        throw new Error("Panorama not found " + img)
      }

      scenes[scene].panorama = img
    }
  } catch (error) {
    console.error(error)
  }
}

/*
  render the converted scene
*/
const PanellumView = () => {
  const project = useSelector((state: IStore) => state.project)
  const divRef = useRef<HTMLDivElement>(null)
  const rootFolder = useContext(appContext).root!

  /* convert paths to blobs */
  const preview = resolveProject(project, rootFolder)

  useEffect(() => {
    ;(async () => {
      // create a panellum viewer
      window.viewer = window.pannellum.viewer("pannellum", preview)
    })()

    return () => {
      // destroy the viewer
      window.viewer.destroy()
    }
  }, [project])

  return <div id="pannellum"></div>
}

export default PanellumView
