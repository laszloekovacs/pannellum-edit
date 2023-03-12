import React from "react"
import HotspotList from "../components/HotspotList"
import SceneList from "../components/SceneList"
import SceneProperties from "../components/SceneProperties"

const EditLayout = () => {
  return (
    <>
      <main>
        <p>main</p>
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
