import { create } from "zustand"

interface EditStreamManagerLayout {
  isEditing: boolean
  setIsEditing: (state: boolean) => void
}

export const useEditLayout = create<EditStreamManagerLayout>((set) => ({
  isEditing: false,
  setIsEditing: (state) => set({ isEditing: state }),
}))
