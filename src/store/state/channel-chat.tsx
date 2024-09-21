import { create } from "zustand"

interface ChatObserver {
  hide: boolean
  setHide: (state: boolean) => void
}

export const useChatObserver = create<ChatObserver>((set) => ({
  hide: false,
  setHide: (state) => set({ hide: state }),
}))
