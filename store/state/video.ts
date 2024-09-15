import { create } from "zustand"

interface VideoProperties {
  height: number
  setHeight: (state: number) => void
}

export const useVideoProperty = create<VideoProperties>((set) => ({
  height: 0,
  setHeight: (state) => set({ height: state }),
}))

interface VideoFullScreen {
  isFullScreen: boolean
  setIsFullScreen: (state: boolean) => void
}

export const useVideoFullScreen = create<VideoFullScreen>((set) => ({
  isFullScreen: false,
  setIsFullScreen: (state) => set({ isFullScreen: state }),
}))
