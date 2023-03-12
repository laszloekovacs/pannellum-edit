import { createSlice } from "@reduxjs/toolkit"
import { trimFileExtension } from "../helpers"
import initialProjectState from "./initialProjectState"

export const projectReducer = createSlice({
  name: "project",
  initialState: initialProjectState,
  reducers: {
    // load scene from project file
    loadScene: (state, action) => {
      return action.payload
    },

    // reset the project delete all scenes and set default
    resetProject: (state) => {
      return initialProjectState
    },

    // set first scene for the player
    firstScene: (state, action) => {
      state.default.firstScene = action.payload
    },

    // add new scene panorama and set inital state
    // do not add a scene if it already exists
    createScene: (state, action) => {
      const { title } = action.payload

      if (!Object.hasOwn(state.scenes, title)) {
        const scene = {
          title: title,
          panorama: title,
          northOffset: 0,
          hotSpots: [],
        }

        state.scenes[title] = scene
      }
    },
  },
})

export default projectReducer.reducer

export const { loadScene, resetProject, firstScene, createScene } = projectReducer.actions
