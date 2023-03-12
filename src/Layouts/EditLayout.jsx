import React from "react"
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
      </aside>
    </>
  )
}

export default EditLayout
