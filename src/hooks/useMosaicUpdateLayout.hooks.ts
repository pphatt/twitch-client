import { useUpdateLayoutContext } from "@/context/layout.context"
import type { MosaicNode } from "react-mosaic-component"

import { useDebounceCallbackHooks } from "@/hooks/useDebounceCallback.hooks"

export const useMosaicUpdateLayoutHooks = (debounceTime?: number) => {
  const { layout, setLayout } = useUpdateLayoutContext()

  const debounceUpdateLayout = useDebounceCallbackHooks(
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
