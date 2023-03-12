import React, { useState, createContext } from "react"

export const appContext = createContext({
  rootdir: null,
  assets: null,
  panorama: null,
})

const AppContextProvider = ({ children }) => {
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

      // remove these later on
      console.log(dirhandle)
      console.log(assets)
      console.log(panorama)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {workDirectory == null ? (
        <input type="button" value="Set working directory" onClick={handleClick} />
      ) : (
        <appContext.Provider
          value={{
            rootdir: workDirectory,
            assets: assetsDirectory,
            panorama: panoramaDirectory,
          }}
        >
          {children}
        </appContext.Provider>
      )}
    </div>
  )
}

export default AppContextProvider
