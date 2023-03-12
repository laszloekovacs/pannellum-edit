import React from "react"
import FileOperations from "./FileOperations"

const Header = ({ modes }) => {
  return (
    <div>
      <FileOperations />
      {modes}
    </div>
  )
}

export default Header
