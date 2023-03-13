const initialProjectState = {
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
    basePath: "panoramas",
    imagePath: "images",
    assetsPath: "assets",
  },
  scenes: {},
  articles: [],
}

export default initialProjectState
