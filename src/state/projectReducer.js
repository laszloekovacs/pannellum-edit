import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  default: {
    firstScene: "",
    sceneFadeDuration: 1000,
    type: "equirectangular",
    autoLoad: true,
    compass: true,
    hotSpotDebug: true,
    hfow: 110,
    vfow: 110,
    minPitch: -98,
    maxPitch: 98,
    basePath: "panorama",
    imagePath: "images",
    assetsPath: "assets",
  },
  scenes: {},
  articles: [],
  editor: {},
}

export const projectReducer = createSlice({
  name: "config",
  initialState,
  reducers: {
    // load scene
    loadScene: (state, action) => {
      state = action.payload
    },

    // reset scene
    reset: (state) => {
      state = initialState
    },

    // set first scene
    firstScene: (state, action) => {
      state.default.firstScene = action.payload
    },

    // add new scene panorama
    addScene: (state, action) => {
      if (!state.scenes.hasOwn(action.payload.title)) {
        state.scenes[action.payload.title] = action.payload
      }
    },
  },
})

export default projectReducer.reducer

export const { firstScene, addScene, loadScene } = projectReducer.actions
