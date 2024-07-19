import { create } from "zustand"
import { persist } from "zustand/middleware"

export enum ChatVariant {
  CHAT = "CHAT",
  COMMUNITY = "COMMUNITY",
}

interface SideNavBarLayoutSlice {
  isSocialColumnOpen: boolean
  setIsSocialColumnOpen: () => void
}

interface StreamChatLayoutSlice {
  isRightColumnClosedByUserAction: boolean
  variant: ChatVariant
  onExpand: () => void
  onCollapse: () => void
  onChangeVariant: (variant: ChatVariant) => void
}

interface CacheLayoutSlice
  extends SideNavBarLayoutSlice,
    StreamChatLayoutSlice {}

export const useCacheLayout = create(
  persist<CacheLayoutSlice>(
    (set, get) => ({
      isSocialColumnOpen: true,
      setIsSocialColumnOpen: () =>
        set({ isSocialColumnOpen: !get().isSocialColumnOpen }),

      isRightColumnClosedByUserAction: false,
      variant: ChatVariant.CHAT,
      onExpand: () => set(() => ({ isRightColumnClosedByUserAction: false })),
      onCollapse: () => set(() => ({ isRightColumnClosedByUserAction: true })),
      onChangeVariant: (variant: ChatVariant) => set(() => ({ variant })),
    }),
    {
      name: "TwitchCloneCache:Layout",
    }
  )
)
