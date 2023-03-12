import React, { useState, createContext, SyntheticEvent } from "react"

export const appContext = createContext({ projectRoot: null })

const AppContextProvider = ({ children }) => {
  const [projectRoot, setProjectRoot] = useState(null)

  const handleClick = async (event) => {
    try {
      // store the root project folder
      const root = await window.showDirectoryPicker({
        mode: "readwrite",
        startIn: "desktop",
      })
      setProjectRoot(root)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {projectRoot == null ? (
        <input type="button" value="Set working directory" onClick={handleClick} />
      ) : (
        <appContext.Provider
          value={{
            projectRoot: projectRoot,
          }}
        >
          {children}
        </appContext.Provider>
      )}
    </div>
  )
}

export default AppContextProvider
