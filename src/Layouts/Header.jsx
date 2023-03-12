import React from "react"

/* components */
import FileOperations from "../components/FileOperations"
import LayoutSelector from "../components/LayoutSelector"

const Header = ({ modes }) => {
  return (
    <nav>
      <FileOperations />
      <LayoutSelector />
    </nav>
  )
}

export default Header