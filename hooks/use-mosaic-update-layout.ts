import type { MosaicNode } from "react-mosaic-component"

import { useDebounceCallback } from "@/hooks/use-debounce-callback"
import { useUpdateLayoutContext } from "@/hooks/use-update-layout-context"

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
