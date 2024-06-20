import { useIsomorphicLayoutEffect } from "@/hooks/use-isomorphic-effect"

export function useDocumentTitle(title: string) {
  useIsomorphicLayoutEffect(() => {
    if (title.trim().length > 0) {
      document.title = title.trim()
    }
  }, [title])
}
