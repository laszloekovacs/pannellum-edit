import { createSlice } from "@reduxjs/toolkit"

const layouts = ["editor", "panoramas", "preview"]

const editorInitialState = {
  layouts: layouts,
  activeLayout: layouts[0],
  activeScene: "",
  viewPitch: 0,
  viewYaw: 0,
}

export const editorSlice = createSlice({
  name: "editor",
  initialState: editorInitialState,
  reducers: {
    resetEditor: (state) => {
      return editorInitialState
    },

    setLayout: (state, action) => {
      state.activeLayout = action.payload
      return state
    },
    setActiveScene: (state, action) => {
      state.activeScene = action.payload
      return state
    },
    setViewAngles: (state, action) => {
      const { pitch, yaw } = action.payload

      state.viewPitch = Number.parseFloat(pitch).toFixed(6)
      state.viewYaw = Number.parseFloat(yaw).toFixed(6)

      return state
    },
  },
})

export default editorSlice.reducer

export const { resetEditor, setLayout, setActiveScene, setViewAngles } = editorSlice.actions
