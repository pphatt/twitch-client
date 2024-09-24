import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicEffect.hooks"

export function useDocumentTitle(title: string) {
  useIsomorphicLayoutEffect(() => {
    if (title.trim().length > 0) {
      document.title = title.trim()
    }
  }, [title])
}
