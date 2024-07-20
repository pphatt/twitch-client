import { create } from "zustand"

interface VideoProperties {
  height: number
  setHeight: (state: number) => void
}

export const useVideoProperty = create<VideoProperties>((set) => ({
  height: 0,
  setHeight: (state) => set({ height: state }),
}))
