import React, { useState } from "react"

// redux
import { store } from "./state/store"
import { Provider } from "react-redux"

/* Components */
import Header from "./Layouts/Header"
import WorkingDirectoriesProvider from "./contexts/WorkingDirectories"

/* Layouts for different tabs */
import EditLayout from "./Layouts/EditLayout"
import PanoramaLayout from "./Layouts/PanoramaLayout"

/* View modes, or view tabs */
const modes = ["edit", "panorama"]

function App() {
  const [viewMode, setViewMode] = useState(modes[0])

  const handleModeChange = (event) => {
    setViewMode(event.target.form.mode.value)
  }

  const ViewSelectElement = (
    <form onChange={handleModeChange}>
      {modes.map((item) => (
        <div key={item}>
          <label htmlFor={item}>{item}</label>
          <input id={item} type="radio" name="mode" value={item} defaultChecked={item == modes[0]} />
        </div>
      ))}
    </form>
  )

  return (
    <React.StrictMode>
      <Provider store={store}>
        <WorkingDirectoriesProvider>
          <>
            <Header modes={ViewSelectElement} />
            {viewMode == "edit" ? <EditLayout /> : <PanoramaLayout />}
          </>
        </WorkingDirectoriesProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
