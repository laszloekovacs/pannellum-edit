import React from "react"
import { useSelector } from "react-redux"

/* layout components */
import EditLayout from "./EditLayout"
import PanoramaLayout from "./PanoramaLayout"
import PreviewLayout from "./PreviewLayout"

/* returns the selected editor "tab" */
function Layout() {
  const editor = useSelector((state) => state.editor)

  switch (editor.activeLayout) {
    case editor.layouts[0]:
      return <EditLayout />
    case editor.layouts[1]:
      return <PanoramaLayout />
    case editor.layouts[2]:
      return <PreviewLayout />
    default:
      return <EditLayout />
  }
}

export default Layout
