import { configureStore } from "@reduxjs/toolkit"
import projectReducer from "./projectReducer"

export const store = configureStore({
  reducer: {
    config: projectReducer,
  },
})
