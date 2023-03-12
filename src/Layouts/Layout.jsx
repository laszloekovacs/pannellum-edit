import React from "react"
import { useSelector } from "react-redux"

/* layout components */
import EditLayout from "./EditLayout"
import PanoramaLayout from "./PanoramaLayout"
import PreviewLayout from "./PreviewLayout"

function Layout() {
  const activeLayout = useSelector((state) => state.editor.activeLayout)

  switch (activeLayout) {
    case "edit":
      return <EditLayout />
    case "panorama":
      return <PanoramaLayout />
    case "preview":
      return <PreviewLayout />
    default:
      return <EditLayout />
  }
}

export default Layout
