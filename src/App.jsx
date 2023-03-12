import Header from "./components/Header"
import React, { useState } from "react"

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
    <div className="bg-slate-200 h-screen p-2">
      <Header modes={ViewSelectElement} />

      <main>{viewMode == "edit" ? <p>view</p> : <p>panorama</p>}</main>
    </div>
  )
}

export default App
