import React, { useState } from "react"
import FileOps from "./FileOps"

const Header = () => {
  const modes = ["edit", "panorama"]

  const [selectedMode, setSelectedMode] = useState(modes[0])

  const handleModeChange = (event) => {
    setSelectedMode(event.target.value)
  }

  const radioButtons = modes.map((item, index) => (
    <label key={item} className="px-4 bg-orange-200">
      <span>{item}</span>
      <input
        className="checked:text-red-400 text-slate-300 w-4"
        type="radio"
        name="mode"
        value={item}
        id={item}
        defaultChecked={index == 0}
      />
    </label>
  ))

  return (
    <div className="bg-slate-400 flex flex-row">
      <FileOps />
      <form className="px-2 py-2" onChange={handleModeChange}>
        {radioButtons}
      </form>
    </div>
  )
}

export default Header
