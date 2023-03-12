import React from "react"
import { useSelector } from "react-redux"
import PanellumView from "./PanellumView"

/*
    scene converter for pannellum
    before rendering we need to convert file paths to urls
*/

const PannellumWrapper = () => {
  const project = useSelector((state) => state.project)

  return (
    <>
      <PanellumView scene={builtScene} />
    </>
  )
}

export default PannellumWrapper
