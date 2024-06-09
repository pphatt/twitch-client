import { create } from "zustand"
import { persist } from "zustand/middleware"

interface DashboardSideNavBarOpenSlice {
  mode: "default" | "hidden" | "compact"
  setMode: (mode: "default" | "hidden" | "compact") => void
}

export const useDashboardOpen = create(
  persist<DashboardSideNavBarOpenSlice>(
    (set) => ({
      mode: "default",
      setMode: (mode) => set({ mode }),
    }),
    {
      name: "dashboard_left_nav_mode",
    }
  )
)

interface CacheLayoutSlice {
  isSocialColumnOpen: boolean
  setIsSocialColumnOpen: () => void
}

export const useCacheLayout = create(
  persist<CacheLayoutSlice>(
    (set, get) => ({
      isSocialColumnOpen: true,
      setIsSocialColumnOpen: () =>
        set({ isSocialColumnOpen: !get().isSocialColumnOpen }),
    }),
    {
      name: "TwitchCloneCache:Layout",
    }
  )
)
