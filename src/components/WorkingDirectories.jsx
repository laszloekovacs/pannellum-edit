import React, { useState, createContext } from "react"

export const workingDirectoryContext = createContext({
  directory: null,
  assets: null,
})

const WorkingDirectories = ({ children }) => {
  const [workDirectory, setWorkDirectory] = useState(null)
  const [assetsDirectory, setAssetsDirectory] = useState(null)
  const [panoramaDirectory, setPanoramaDirectory] = useState(null)

  const handleClick = async (event) => {
    try {
      // store the root project folder
      const dirhandle = await window.showDirectoryPicker({
        mode: "readwrite",
        startIn: "desktop",
      })
      setWorkDirectory(dirhandle)

      // return or create the assets folder
      const assets = await dirhandle.getDirectoryHandle("assets", {
        create: true,
      })
      setAssetsDirectory(assets)

      // return or create the panoramas folder
      const panorama = await dirhandle.getDirectoryHandle("panoramas", {
        create: true,
      })
      setPanoramaDirectory(panorama)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {workDirectory == null ? (
        <input type="button" value="Set working directory" onClick={handleClick} />
      ) : (
        <workingDirectoryContext.Provider
          value={{
            directory: workDirectory,
            assets: assetsDirectory,
            panorama: panoramaDirectory,
          }}
        >
          {children}
        </workingDirectoryContext.Provider>
      )}
    </div>
  )
}

export default WorkingDirectories
