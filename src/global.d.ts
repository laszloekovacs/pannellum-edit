export interface IStore {
  project: IProjectState
  editor: IEditorState
}

export type ILayout = "editor" | "panoramas" | "preview"

export interface IEditorState {
  layouts: ILayout
  activeLayout: ILayout
  activeScene: string
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
  type: string
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
    }
  }
}
