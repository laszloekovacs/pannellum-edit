import React from "react"
import FileOperations from "./FileOperations"

const Header = ({ modes }) => {
  return (
    <nav>
      <FileOperations />
      {modes}
    </nav>
  )
}

export default Header
