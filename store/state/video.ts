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
  isFullscreen: boolean
  setIsFullscreen: (state: boolean) => void
}

export const useVideoFullScreen = create<VideoFullScreen>((set) => ({
  isFullscreen: false,
  setIsFullscreen: (state) => set({ isFullscreen: state }),
}))
