import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicEffect.hooks"

export function useDocumentTitleHooks(title: string) {
  useIsomorphicLayoutEffect(() => {
    if (title.trim().length > 0) {
      document.title = title.trim()
    }
  }, [title])
}
