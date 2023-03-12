import { createSlice } from "@reduxjs/toolkit"

const layouts = ["editor", "panorama", "preview"]

const initialState = {
  layouts: layouts,
  activeLayout: layouts[0],
}

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialState,
  reducers: {
    setLayout: (state, action) => {
      state.activeLayout = action.payload
    },
  },
})

export default editorSlice.reducer

export const { setLayout } = editorSlice.actions
