import { createSlice } from "@reduxjs/toolkit"
import { trimFileExtension } from "../helpers"
import initialProjectState from "./initialProjectState"

export const projectReducer = createSlice({
  name: "project",
  initialState: initialProjectState,
  reducers: {
    // load scene from project file
    loadScene: (state, action) => {
      state = action.payload
    },

    // reset the project delete all scenes and set default
    resetProject: (state) => {
      state = initialProjectState
    },

    // set first scene for the player
    firstScene: (state, action) => {
      state.default.firstScene = action.payload
    },

    // add new scene panorama and set inital state
    // do not add a scene if it already exists
    createScene: (state, action) => {
      if (!Object.hasOwn(state.scenes, action.payload.title)) {
        // new scene structure
        const scene = {
          title: trimFileExtension(action.payload.title),
          panorama: action.payload.title,
          northOffset: 0,
          hotSpots: [],
        }

        state.scenes[action.payload.title] = scene
      }
    },
  },
})

export default projectReducer.reducer

export const { loadScene, resetProject, firstScene, createScene } = projectReducer.actions
