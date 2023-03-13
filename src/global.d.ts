export interface IStore {
  project: IProjectState
  editor: IEditorState
}

export type ILayout = "editor" | "panoramas" | "preview"

export interface IEditorState {
  layouts: ILayout
  activeLayout: ILayout
  activeScene: string
  viewPitch: number
  viewYaw: number
}

export interface IProjectState {
  default: {
    firstScene: string
    sceneFadeDuration: number
    type: "equirectangular"
    autoLoad: boolean
    compass: boolean
    hotSpotDebug: boolean
    hfov: number
    vfov: number
    minPitch: number
    maxPitch: number
    basePath: string
    imagePath: string
    assetsPath: string
  }
  scenes: { [key: string]: IScene }
  articles: object[]
}

export interface IScene {
  title: string
  panorama: string
  northOffset: number
  hotSpots: IHotSpot[]
}

export interface IHotSpot {
  pitch: number
  yaw: number
  type: "scene" | "info"
  text: string
  targetYaw: number
  sceneId: string
}

//extend the global window object
declare global {
  interface Window {
    pannellum: {
      viewer: (container: HMTLElement | string, initialConfig: Object) => viewer
    }
    viewer: {
      destroy: () => void
      getPitch: () => number
      getYaw: () => number
      // set viewer pitch and yaw
      setPitch: (pitch: number, animated: boolean | number) => viewer
      setYaw: (yaw: number, animated: boolean | number) => viewer
      // loads a scene
      loadScene: (sceneId: string, pitch?: number, yaw?: number) => viewer
      // gets the current scene id
      getScene: () => string
      // sets event listener
      on: (event: "scenechange" | "animatefinished" | "error", callback: (data: any) => void) => viewer
    }
  }
}
