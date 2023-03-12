import React, { useContext } from "react"
import { useSelector } from "react-redux"
import PanellumView from "./PanellumView"

import { appContext } from "../contexts/AppContext"

const PannellumWrapper = () => {
  const project = useSelector((state) => state.project)
  const panoramaFolder = useContext(appContext).panoramas

  return (
    <>
      <PanellumView scene={project} />
    </>
  )
}

export default PannellumWrapper
