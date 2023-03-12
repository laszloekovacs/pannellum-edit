import { createSlice } from "@reduxjs/toolkit"

const layouts = ["editor", "panoramas", "preview"]

const initialState = {
  layouts: layouts,
  activeLayout: layouts[0],
  activeScene: 0,
}

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    setLayout: (state, action) => {
      state.activeLayout = action.payload
    },
    setActiveScene: (state, action) => {
      state.activeScene = action.payload
    },
  },
})

export default editorSlice.reducer

export const { setLayout, setActiveScene } = editorSlice.actions
