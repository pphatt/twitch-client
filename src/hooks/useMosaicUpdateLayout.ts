import { useUpdateLayoutContext } from "@/context/update-layout-context"
import type { MosaicNode } from "react-mosaic-component"

import { useDebounceCallback } from "@/hooks/useDebounceCallback"

export const useMosaicUpdateLayout = (debounceTime?: number) => {
  const { layout, setLayout } = useUpdateLayoutContext()

  const debounceUpdateLayout = useDebounceCallback(
    (layout: MosaicNode<string> | null, callback?: () => void) => {
      setLayout(layout)

      if (callback) {
        callback()
      }
    },
    debounceTime ?? 500
  )

  return { layout, setLayout, debounceUpdateLayout }
}
