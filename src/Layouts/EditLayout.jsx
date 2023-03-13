import React from "react"
import HotspotList from "../components/HotspotList"
import SceneList from "../components/SceneList"
import SceneProperties from "../components/SceneProperties"
import PannellumView from "../components/PannellumView"

const EditLayout = () => {
  return (
    <>
      <main>
        <PannellumView />
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
