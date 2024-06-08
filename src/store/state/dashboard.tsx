import { create } from "zustand"

interface EditStreamManagerLayout {
  isEditing: boolean
  setIsEditing: (state: boolean) => void
}

export const useEditLayout = create<EditStreamManagerLayout>((set, get) => ({
  isEditing: false,
  setIsEditing: (state) => set({ isEditing: state }),
}))
