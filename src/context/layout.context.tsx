"use client"

import * as React from "react"
import type { MosaicNode } from "react-mosaic-component"
import { DEFAULT_LAYOUT } from "src/constants"
import { useStore } from "zustand"
import { createStore } from "zustand/vanilla"

import { useLocalStorage } from "@/hooks/useLocalStorage.hooks"

type LayoutState = {
  layout: MosaicNode<string> | null
}

type LayoutAction = {
  setLayout: (
    val:
      | MosaicNode<string>
      | null
      | ((prevState: MosaicNode<string> | null) => MosaicNode<string> | null)
  ) => void
}

export type LayoutStore = LayoutState & LayoutAction

const createLayoutStore = ({ layout, setLayout }: LayoutStore) => {
  return createStore<LayoutStore>()(() => ({
    layout,
    setLayout,
  }))
}

export type LayoutStoreApi = ReturnType<typeof createLayoutStore>

export const LayoutStoreContext = React.createContext<
  LayoutStoreApi | undefined
>(undefined)

export interface LayoutStoreProviderProps {
  children: React.ReactNode
}

export default function LayoutStoreProvider({
  children,
}: LayoutStoreProviderProps) {
  const storeRef = React.useRef<LayoutStoreApi>()

  const localStorageValue = window["localStorage"].getItem(
    "stream-manager-drag-and-drop-layout"
  )

  let parsedValue: MosaicNode<string> = DEFAULT_LAYOUT

  if (
    localStorageValue &&
    localStorageValue !== "null" &&
    localStorageValue !== "undefined"
  ) {
    parsedValue = JSON.parse(localStorageValue) as MosaicNode<string>
  }

  /*
   * ignore the defaultValue because it acts like an initial value and that make the UI/UX not great
   * setting this null act like a useState + useContext
   * */
  const [layout, setLayout] = useLocalStorage<MosaicNode<string> | null>({
    key: "stream-manager-drag-and-drop-layout",
    defaultValue: parsedValue,
  })

  if (!storeRef.current) {
    storeRef.current = createLayoutStore({
      layout,
      setLayout,
    })
  }

  return (
    <LayoutStoreContext.Provider value={storeRef.current}>
      {children}
    </LayoutStoreContext.Provider>
  )
}

export const useLayoutStore = <T,>(selector: (store: LayoutStore) => T): T => {
  const layoutStoreContext = React.useContext(LayoutStoreContext)

  if (!layoutStoreContext) {
    throw new Error(`useLayoutStore must be used within LayoutStoreProvider`)
  }

  return useStore(layoutStoreContext, selector)
}

export { useLayoutStore as useLayout }
