import React, { useState, createContext } from "react"

export const appContext = createContext({
  root: null,
  panoramas: null,
})

const AppContextProvider = ({ children }) => {
  const [rootFolder, setRootFolder] = useState(null)
  const [panoramasFolder, setPanoramasFolder] = useState(null)

  const handleClick = async (event) => {
    try {
      // store the root project folder
      const root = await window.showDirectoryPicker({
        mode: "readwrite",
        startIn: "desktop",
      })
      setRootFolder(root)

      const panoramas = await root.getDirectoryHandle("panoramas", {
        create: false,
      })
      setPanoramasFolder(panoramas)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {rootFolder == null ? (
        <input type="button" value="Set working directory" onClick={handleClick} />
      ) : (
        <appContext.Provider
          value={{
            root: rootFolder,
            panoramas: panoramasFolder,
          }}
        >
          {children}
        </appContext.Provider>
      )}
    </div>
  )
}

export default AppContextProvider
