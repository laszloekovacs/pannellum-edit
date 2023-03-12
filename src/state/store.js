import { configureStore } from "@reduxjs/toolkit"
import projectReducer from "./projectReducer"
import editorReducer from "./editorReducer"

export const store = configureStore({
  reducer: {
    project: projectReducer,
    editor: editorReducer,
  },
})
