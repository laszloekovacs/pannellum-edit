import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setLayout } from "../state/editorReducer"

const LayoutSelector = () => {
  const dispatch = useDispatch()
  const active = useSelector((state) => state.editor.activeLayout)
  const layouts = useSelector((state) => state.editor.layouts)

  const handleChange = (e) => {
    const selection = e.target.value
    dispatch(setLayout(selection))
  }

  return (
    <form onChange={handleChange}>
      {layouts.map((layout) => (
        <div key={layout}>
          <label htmlFor={layout}>{layout}</label>
          <input type="radio" id={layout} name="layout" value={layout} defaultChecked={layout == active} />
        </div>
      ))}
    </form>
  )
}

export default LayoutSelector
