import type { MosaicNode } from "react-mosaic-component"
import { create } from "zustand"

interface EditStreamManagerLayout {
  isEditing: boolean
  setIsEditing: (state: boolean) => void
}

export const useEditLayout = create<EditStreamManagerLayout>((set) => ({
  isEditing: false,
  setIsEditing: (state) => set({ isEditing: state }),
}))

interface StreamManagerLayoutEditState {
  editLayout: MosaicNode<string> | null
  setEditLayout: (state: MosaicNode<string> | null) => void
}

export const useEditLayoutState = create<StreamManagerLayoutEditState>(
  (set) => ({
    editLayout: null,
    setEditLayout: (layout) => set({ editLayout: layout }),
  })
)
