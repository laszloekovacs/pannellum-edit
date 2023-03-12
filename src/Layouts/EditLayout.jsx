import React from "react"
import HotspotList from "../components/HotspotList"
import PannellumWrapper from "../components/PannellumWrapper"
import SceneList from "../components/SceneList"
import SceneProperties from "../components/SceneProperties"

const EditLayout = () => {
  return (
    <>
      <main>
        <PannellumWrapper />
      </main>
      <aside>
        <SceneList />
        <SceneProperties />
        <HotspotList />
      </aside>
    </>
  )
}

export default EditLayout
