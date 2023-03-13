import { createSlice } from "@reduxjs/toolkit"

const layouts = ["editor", "panoramas", "preview"]

const editorInitialState = {
  layouts: layouts,
  activeLayout: layouts[0],
  activeScene: "",
  viewYaw: 0,
  viewPitch: 0,
}

export const editorSlice = createSlice({
  name: "editor",
  initialState: editorInitialState,
  reducers: {
    setLayout: (state, action) => {
      state.activeLayout = action.payload
      return state
    },
    setActiveScene: (state, action) => {
      state.activeScene = action.payload
      return state
    },
    setViewAngles: (state, action) => {
      const { yaw, pitch } = action.payload

      state.viewYaw = parseFloat(yaw.toFixed(2))
      state.viewPitch = parseFloat(pitch.toFixed(2))
      return state
    },
  },
})

export default editorSlice.reducer

export const { setLayout, setActiveScene, setViewAngles } = editorSlice.actions
