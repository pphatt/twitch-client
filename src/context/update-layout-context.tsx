"use client"

import * as React from "react"
import { DEFAULT_LAYOUT } from "@/constant"
import type { MosaicNode } from "react-mosaic-component"

import { useLocalStorage } from "@/hooks/use-local-storage"

export const LayoutContext = React.createContext<{
  layout: MosaicNode<string> | null
  setLayout: (
    val:
      | MosaicNode<string>
      | null
      | ((prevState: MosaicNode<string> | null) => MosaicNode<string> | null)
  ) => void
}>({
  layout: null,
  setLayout: () => {},
})

export default function UpdateLayoutContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [layout, setLayout] = useLocalStorage<MosaicNode<string> | null>({
    key: "stream-manager-drag-and-drop-layout",
    defaultValue: null,
  })

  React.useEffect(() => {
    const localStorageValue = window["localStorage"].getItem(
      "stream-manager-drag-and-drop-layout"
    )

    let parsedValue: MosaicNode<string> = DEFAULT_LAYOUT

    if (localStorageValue) {
      parsedValue = JSON.parse(localStorageValue) as MosaicNode<string>
    }

    setLayout(parsedValue)
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        layout,
        setLayout,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
