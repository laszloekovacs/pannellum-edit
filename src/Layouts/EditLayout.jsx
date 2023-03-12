import React from "react"
import HotspotList from "../components/HotspotList"
import PanellumView from "../components/PanellumView"
import SceneList from "../components/SceneList"
import SceneProperties from "../components/SceneProperties"

const EditLayout = () => {
  return (
    <>
      <main>
        <PanellumView />
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
