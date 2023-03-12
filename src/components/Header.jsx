import React from "react"
import FileOperations from "./FileOperations"

const Header = ({ modes }) => {
  return (
    <div className="flex flex-row">
      <FileOperations />
      {modes}
    </div>
  )
}

export default Header
