"use client"

import * as React from "react"
import { DEFAULT_LAYOUT } from "src/constants"
import type { MosaicNode } from "react-mosaic-component"
import { create, type StoreApi } from "zustand"
import createContext from "zustand/context"

import { useLocalStorage } from "@/hooks/useLocalStorage.hooks"

type ILayoutStore = {
  layout: MosaicNode<string> | null
  setLayout: (
    val:
      | MosaicNode<string>
      | null
      | ((prevState: MosaicNode<string> | null) => MosaicNode<string> | null)
  ) => void
}

const { Provider, useStore } = createContext<StoreApi<ILayoutStore>>()

const createLayoutStore = ({ layout, setLayout }: ILayoutStore) =>
  create<ILayoutStore>(() => ({
    layout,
    setLayout,
  }))

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
  /*
   * ignore the defaultValue because it acts like an initial value and that make the UI/UX not great
   * setting this null act like a useState + useContext
   * */
  const [layout, setLayout] = useLocalStorage<MosaicNode<string> | null>({
    key: "stream-manager-drag-and-drop-layout",
    defaultValue: null,
  })

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

  if (!layout) {
    setLayout(parsedValue)
  }

  return (
    <Provider
      createStore={() =>
        createLayoutStore({
          layout,
          setLayout,
        })
      }
    >
      {children}
    </Provider>
  )
}

export { useStore as useUpdateLayoutContext }
