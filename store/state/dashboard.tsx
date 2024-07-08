import { DEFAULT_LAYOUT } from "@/constant"
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
    editLayout: DEFAULT_LAYOUT,
    setEditLayout: (layout) => set({ editLayout: layout }),
  })
)

interface TempNodeLayoutState {
  tempNodeLayout: MosaicNode<string> | null
  setTempNodeLayout: (state: MosaicNode<string> | null) => void
}

export const useTempNodeLayout = create<TempNodeLayoutState>((set) => ({
  tempNodeLayout: null,
  setTempNodeLayout: (layout) => set({ tempNodeLayout: layout }),
}))
