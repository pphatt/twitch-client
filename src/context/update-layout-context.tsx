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
      | ((prevState: MosaicNode<string>) => MosaicNode<string>)
  ) => void
}>()

export default function UpdateLayoutContext({
  children,
}: {
  children: React.ReactNode
}) {
  const [layout, setLayout] = useLocalStorage<MosaicNode<string>>({
    key: "stream-manager-drag-and-drop-layout",
    defaultValue: DEFAULT_LAYOUT,
  })

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
