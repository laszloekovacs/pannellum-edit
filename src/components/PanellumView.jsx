import React, { useEffect } from "react"
const resolvePanorama = async (scene, assetFolder) => {
  try {
    const img = scene.panorama

    //assetFolder is a fileSystemDirectoryHandle
    const file = await assetFolder.getFileHandle(img)

    // read the file into a blob
    const blob = await file.getFile()

    // create a URL from the blob
    return URL.createObjectURL(blob)
  } catch (error) {
    console.error(error)
  }
}

// loop trough the scenes and convert file names to blob urls
const resolveScenes = async (project, assetFolder) => {}

/*
  render the converted scene
*/
const PanellumView = () => {
  return <div id="pannellum"></div>
}

export default PanellumView
