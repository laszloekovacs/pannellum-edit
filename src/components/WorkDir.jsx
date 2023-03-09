import React, { useState, createContext } from "react"

export const workingDirectoryContext = createContext({ directory: null })

const WorkDir = () => {
  const [workDirectory, setWorkDirectory] = useState(null)

  const handleClick = async (event) => {
    try {
      const dirhandle = await window.showDirectoryPicker({
        mode: "readwrite",
        startIn: "desktop",
      })

      setWorkDirectory(dirhandle)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {workDirectory == null ? (
        <input
          className="border-solid border-2 border-indigo-500 px-2 py-1"
          type="button"
          value="Set working directory"
          onClick={handleClick}
        />
      ) : (
        <workingDirectoryContext.Provider value={workDirectory}>
          <p>Working directory selected</p>
        </workingDirectoryContext.Provider>
      )}
    </div>
  )
}

export default WorkDir
